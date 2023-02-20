import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../../../state/store';
import getBusAttendances from '../../../../data/api/queries/busAttendances';
import { IBusAttendance, IBusRouteLocations } from '../types';
import getGeoLocation from '../../../../data/google/getGeoLocation';
import { parseISO, format } from 'date-fns';

export const HANDLE_DATE_RANGE_CHANGE = 'HANDLE_DATE_RANGE_CHANGE';
export const LOAD_BUS_ATTENDENCES_SUCCESS = 'LOAD_BUS_ATTENDENCES_SUCCESS';
export const LOAD_BUS_ATTENDENCES_FAIL = 'LOAD_BUS_ATTENDENCES_FAIL';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export interface HandleDateRangeChangeAction {
  type: typeof HANDLE_DATE_RANGE_CHANGE;
  startDate: Date;
  endDate: Date;
}

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

export interface HandleLoadBusAttendencesSuccess {
  type: typeof LOAD_BUS_ATTENDENCES_SUCCESS;
  data: IBusAttendance[];
}

export interface HandleLoadBusAttendencesFail {
  type: typeof LOAD_BUS_ATTENDENCES_FAIL;
}

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export type BusAttendenceActionTypes =
  | HandleDateRangeChangeAction
  | HandleLoadBusAttendencesSuccess
  | HandleLoadBusAttendencesFail
  | SetIsLoadingAction;

export const loadBusAttendances = ({
  startDate,
  endDate,
  organizationId,
}: {
  startDate: Date;
  endDate: Date;
  organizationId: string;
}): ThunkAction<void, RootState, unknown, BusAttendenceActionTypes> => async (
  dispatch,
) => {
  dispatch(setIsLoading(true));
  try {
    const { success, error, data } = await getBusAttendances({
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      organizationId: organizationId,
    });

    const busAttendancesData = (
      busAttendances: IBusRouteLocations[],
    ): Promise<IBusAttendance[]> => {
      const promises = busAttendances.map(async (rec: IBusRouteLocations) => {
        const location = await getGeoLocation({
          lat: rec.latitude,
          lng: rec.longitude,
        });
        return {
          name: `${rec.person.organizationPerson.firstName} ${rec.person.organizationPerson.lastName}`,
          id: rec.person.organizationPerson.id.toString(),
          busNumber: rec.busRoute.bus.number,
          boarding: format(parseISO(rec.eventDate), 'hh:mm a'),
          location,
        };
      });
      return Promise.all(promises);
    };

    const busAttendances = await busAttendancesData(
      data as IBusRouteLocations[],
    );

    if (!success) {
      throw error;
    }

    dispatch({
      type: LOAD_BUS_ATTENDENCES_SUCCESS,
      data: busAttendances,
    });
  } catch (err) {
    dispatch({
      type: LOAD_BUS_ATTENDENCES_FAIL,
    });
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const handleDateRangeChange = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}): HandleDateRangeChangeAction => ({
  type: HANDLE_DATE_RANGE_CHANGE,
  startDate,
  endDate,
});

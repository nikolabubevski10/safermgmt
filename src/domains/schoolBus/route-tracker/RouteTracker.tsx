import React, { useEffect, useState, useMemo, ReactElement } from 'react';
import {
  Container,
  ButtonsGroup,
  Header,
  TableContainer,
  FiltersContainer,
  SpinnerContainer,
} from './RouteTrackerStyles';
import Button from './components/Button/Button';
import SearchDropDown from './components/search-filter/SearchDropDown';
import { Column, Row } from 'react-table';
import Filter from './components/filter/Filter';
import Table from './components/table/Table';
import Link from './components/table/components/link/Link';
import Status from './components/table/components/status/Status';
import MapModal from './components/map-modal/MapModal';

import DatePicker from '../components/date-picker/DatePicker';
import busRoutes from './mockBusRouteTrackers';
import { FilterType, IBusRoute } from './types';
import getGeoLocation from '../../../data/google/getGeoLocation';
import Spinner from '../components/spinner/Spinner';

type TBussData = {
  status: ReactElement;
  busNumber: string;
  driverId: string;
  period: string;
  totalTime: string;
  routes: string;
  map: ReactElement;
};

const statusFilter = (rows: Row[], id: string[], filterValue: boolean) => {
  if (filterValue === null) {
    return rows;
  } else if (filterValue === true) {
    return rows.filter((row) => {
      return row.values.status.props.status === true;
    });
  } else if (filterValue === false) {
    return rows.filter((row) => {
      return row.values.status.props.status === false;
    });
  } else {
    return [];
  }
};

const RouteTracker: React.FC = () => {
  const [currentRouteId, setCurrentRouteId] = useState<string>('');
  const [data, setData] = useState<TBussData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const columns = useMemo<Column[]>(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
        disableSortBy: true,
        disableFilters: true,
        filter: statusFilter,
      },
      {
        Header: 'Bus Number',
        accessor: 'busNumber',
        disableFilters: true,
        disableSortBy: true,
      },
      {
        Header: 'Driver ID',
        accessor: 'driverId',
        disableFilters: true,
        disableSortBy: true,
      },
      {
        Header: 'Start/End Time',
        accessor: 'period',
        sortInverted: true,
        disableFilters: true,
      },
      {
        Header: 'Total Time',
        accessor: 'totalTime',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: 'Route Start/End',
        accessor: 'routes',
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: '',
        accessor: 'map',
        disableSortBy: true,
        disableFilters: true,
      },
    ],
    [],
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const busData = (): Promise<TBussData[]> => {
        const promises = busRoutes.map(async (busRoute) => {
          const startLocation = await getGeoLocation(
            busRoute.route.startLocation,
          );
          const endLocation = await getGeoLocation(busRoute.route.endLocation);

          return {
            status: <Status status={busRoute.status === 'completed'} />,
            busNumber: busRoute.bus.number,
            driverId: busRoute.busDriver.id,
            period: `${busRoute.startTime}-${busRoute.endTime}`,
            totalTime: busRoute.totalTime,
            routes: `${startLocation} - ${endLocation}`,
            map: <Link onClick={() => onLoadMap(busRoute)}>Map</Link>,
          };
        });
        return Promise.all(promises);
      };

      setData(await busData());
      setIsLoading(false);
    })();
  }, [setData]);

  const [shouldShowCompletedRoutes, setShouldShowCompletedRoutes] = useState(
    true,
  );
  const [shouldShowEmergencies, setShouldShowEmergencies] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDateChange = (newDates: { startDate: Date; endDate: Date }) => {
    console.log(newDates, currentRouteId);
  };

  const [properties, setProperties] = useState<IBusRoute | undefined>(
    undefined,
  );

  const onLoadMap = (busRoute: IBusRoute) => {
    setProperties(busRoute);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Header>
        <h1>Route Tracker</h1>
        <ButtonsGroup>
          <Button>Export report</Button>
        </ButtonsGroup>
      </Header>
      <SearchDropDown Data={busRoutes} selectItem={setCurrentRouteId} />
      <DatePicker onDateChange={onDateChange} />
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <>
          <FiltersContainer>
            <Filter
              amount={
                data.filter((elem) => elem.status.props.status === true).length
              }
              isChecked={shouldShowCompletedRoutes}
              icon="check"
              label="Total completed routes"
              onClick={() => setShouldShowCompletedRoutes((prev) => !prev)}
              type={FilterType.Positive}
            />

            <Filter
              amount={
                data.filter((elem) => elem.status.props.status === false).length
              }
              isChecked={shouldShowEmergencies}
              icon="times"
              label="Total emergencies"
              onClick={() => setShouldShowEmergencies((prev) => !prev)}
              type={FilterType.Negative}
            />
          </FiltersContainer>
          <TableContainer>
            <Table
              columns={columns}
              data={data}
              defaultSortBy="period"
              shouldShowCompletedRoutes={shouldShowCompletedRoutes}
              shouldShowEmergencies={shouldShowEmergencies}
            />
          </TableContainer>
          {isModalOpen && properties && (
            <MapModal
              shouldShow={isModalOpen}
              closeModal={() => setIsModalOpen(false)}
              mapData={properties}
              isLoading={false}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default RouteTracker;

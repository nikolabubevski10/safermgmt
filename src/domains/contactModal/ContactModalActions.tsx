import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../state/store';
import contactUs from '../../data/adapters/contactUs';

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CONTACT_US_FAIL = 'CONTACT_US_FAIL';
export const CONTACT_US_SUCCESS = 'CONTACT_US_SUCCESS';
export const SET_IS_LOADING = 'SET_IS_LOADING';

interface ClearErrorAction {
  type: typeof CLEAR_ERROR;
}

interface ContactUsFailAction {
  type: typeof CONTACT_US_FAIL;
  error: string;
}

interface ContactUsSucessAction {
  type: typeof CONTACT_US_SUCCESS;
}

interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  isLoading: boolean;
}

export type HomeActionTypes =
  | ClearErrorAction
  | ContactUsFailAction
  | ContactUsSucessAction
  | SetIsLoadingAction;

export const clearError = (): ThunkAction<
  void,
  RootState,
  unknown,
  HomeActionTypes
> => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};

export const setIsLoading = (isLoading: boolean): HomeActionTypes => {
  return {
    type: SET_IS_LOADING,
    isLoading,
  };
};

export const submitContactUsForm = ({
  email,
  fullName,
  message,
  organization,
}: {
  email: string;
  fullName: string;
  message: string;
  organization: string;
}): ThunkAction<
  Promise<{ success: boolean }>,
  RootState,
  unknown,
  HomeActionTypes
> => async (dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const { success, error } = await contactUs({
      email,
      fullName,
      message,
      organization,
    });

    if (!success) {
      throw error;
    }

    dispatch({
      type: CONTACT_US_SUCCESS,
    });

    return { success: true };
  } catch (err) {
    const errorMessage = 'Something went wrong with sending your email';
    dispatch({
      type: CONTACT_US_FAIL,
      error: errorMessage,
    });

    return { success: false };
  } finally {
    dispatch(setIsLoading(false));
  }
};

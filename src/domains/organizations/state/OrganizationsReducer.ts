import * as Actions from './OrganizationsActions';
import view from './assets/views';
import { Reducer } from 'redux';
import {
  OrganizationGeneral,
  OrganizationPreScreen,
  PersonConfig,
  OrganizationProfileSetup,
  SurveyEmailType,
  MedicalAlertType,
  EmailAlertContactConfigType,
  ThemeType,
} from './assets/types';
import {
  emptyOrgGeneral,
  emptyOrgPreScreen,
  initialStaff,
  initialStudent,
  initialVisitor,
  initialOrganizationProfileSetup,
  initialOrganizationSurveyAlert,
} from './assets/initialData';

export interface State {
  view: string;
  isLoading: boolean;
  organizationWithChanges: OrganizationGeneral;
  organizationPreScreenWithChanges: OrganizationPreScreen;
  organizationPersonConfigWithChanges: {
    staff: PersonConfig;
    student: PersonConfig;
    visitor: PersonConfig;
  };
  organizationProfileSetupWithChanges: OrganizationProfileSetup;
  organizationSurveyAlertWithChanges: {
    surveyEmail: SurveyEmailType;
    medicalAlert: MedicalAlertType;
    emailAlertContactConfig: EmailAlertContactConfigType;
    theme: ThemeType;
  };
  hasBeenChanged: boolean;
  isSaved: boolean;
}

const initialState = {
  view: view.general,
  isLoading: false,
  organizationWithChanges: emptyOrgGeneral,
  organizationPreScreenWithChanges: emptyOrgPreScreen,
  organizationPersonConfigWithChanges: {
    staff: initialStaff,
    student: initialStudent,
    visitor: initialVisitor,
  },
  organizationProfileSetupWithChanges: initialOrganizationProfileSetup,
  organizationSurveyAlertWithChanges: initialOrganizationSurveyAlert,
  hasBeenChanged: false,
  isSaved: false,
};

const OrganizationsReducer: Reducer<State, Actions.OrgamizationsActionTypes> = (
  state: State = initialState,
  action: Actions.OrgamizationsActionTypes,
) => {
  switch (action.type) {
    case Actions.SET_VIEW: {
      return {
        ...state,
        view: action.view,
      };
    }

    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.bool,
      };
    }
    case Actions.CHANGE_ORG_GENERAL_FIELDS: {
      const { organizationWithChanges } = state;
      // Setting a value using dynamic key is creating issue with types and not taking unknow type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationWithChanges: any = { ...organizationWithChanges };
      newOrganizationWithChanges[action.e.target.name] = action.e.target.value;
      return {
        ...state,
        organizationWithChanges: newOrganizationWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.SET_GENERAL_FORM_CHECK_FIELDS: {
      const { organizationWithChanges } = state;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationWithChanges: any = { ...organizationWithChanges };
      newOrganizationWithChanges[action.name] = action.status;
      return {
        ...state,
        organizationWithChanges: newOrganizationWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.SET_PRE_SCREEN_FORM_CHECK_FIELDS: {
      const { organizationPreScreenWithChanges } = state;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationPreScreenWithChanges: any = {
        ...organizationPreScreenWithChanges,
      };
      newOrganizationPreScreenWithChanges[action.name] = action.status;
      return {
        ...state,
        organizationPreScreenWithChanges: newOrganizationPreScreenWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.SET_PERSON_CONFIG_FORM_CHECK_FIELDS: {
      const { organizationPersonConfigWithChanges } = state;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationPersonConfigWithChanges: any = {
        ...organizationPersonConfigWithChanges,
      };
      newOrganizationPersonConfigWithChanges[action.personType][action.name] =
        action.status;
      return {
        ...state,
        organizationPersonConfigWithChanges: newOrganizationPersonConfigWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.SET_PROFILE_SETUP_FORM_CHECK_FIELDS: {
      const { organizationProfileSetupWithChanges } = state;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationProfileSetupWithChanges: any = {
        ...organizationProfileSetupWithChanges,
      };
      newOrganizationProfileSetupWithChanges[
        action.name as keyof OrganizationProfileSetup
      ] = action.status;
      return {
        ...state,
        organizationProfileSetupWithChanges: newOrganizationProfileSetupWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.CHANGE_ORG_PROFILE_SETUP_FIELDS: {
      const { organizationProfileSetupWithChanges } = state;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationProfileSetupWithChanges: any = {
        ...organizationProfileSetupWithChanges,
      };
      newOrganizationProfileSetupWithChanges[action.e.target.name] =
        action.e.target.value;
      return {
        ...state,
        organizationProfileSetupWithChanges: newOrganizationProfileSetupWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.CHANGE_ORG_PRE_SCREEN_FIELDS: {
      const { organizationPreScreenWithChanges } = state;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationPreScreenWithChanges: any = {
        ...organizationPreScreenWithChanges,
      };
      newOrganizationPreScreenWithChanges[action.e.target.name] =
        action.e.target.value;
      return {
        ...state,
        organizationPreScreenWithChanges: newOrganizationPreScreenWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.CHANGE_ORG_SURVEY_ALERT_FIELDS: {
      const { organizationSurveyAlertWithChanges } = state;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationSurveyAlertWithChanges: any = {
        ...organizationSurveyAlertWithChanges,
      };
      newOrganizationSurveyAlertWithChanges[action.category][
        action.e.target.name
      ] = action.e.target.value;
      return {
        ...state,
        organizationSurveyAlertWithChanges: newOrganizationSurveyAlertWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.SET_SURVEY_ALERT_FORM_CHECK_FIELDS: {
      const { organizationSurveyAlertWithChanges } = state;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationSurveyAlertWithChanges: any = {
        ...organizationSurveyAlertWithChanges,
      };
      newOrganizationSurveyAlertWithChanges[action.category][action.name] =
        action.status;
      return {
        ...state,
        organizationSurveyAlertWithChanges: newOrganizationSurveyAlertWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.SET_SURVEY_ALERT_FORM_COLOR_CHANGE_FIELDS: {
      const { organizationSurveyAlertWithChanges } = state;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newOrganizationSurveyAlertWithChanges: any = {
        ...organizationSurveyAlertWithChanges,
      };
      newOrganizationSurveyAlertWithChanges[action.fileldName][
        action.colorField
      ] = action.colorIs;
      return {
        ...state,
        organizationSurveyAlertWithChanges: newOrganizationSurveyAlertWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    case Actions.CHANGE_PRE_SCREEN_DELIVERY_DAYS: {
      const { organizationPreScreenWithChanges } = state;
      const newOrganizationPreScreenWithChanges = {
        ...organizationPreScreenWithChanges,
      };
      const days = [...newOrganizationPreScreenWithChanges.deliveryDays];
      days.map((day) => {
        if (day.day === action.day) {
          day.active = action.status;
        }
      });
      newOrganizationPreScreenWithChanges.deliveryDays = days;
      return {
        ...state,
        organizationPreScreenWithChanges: newOrganizationPreScreenWithChanges,
        hasBeenChanged: true,
        isSaved: false,
      };
    }

    default:
      return state;
  }
};

export default OrganizationsReducer;

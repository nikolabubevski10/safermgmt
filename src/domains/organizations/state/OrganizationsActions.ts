export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_VIEW = 'SET_VIEW';
export const CHANGE_ORG_GENERAL_FIELDS = 'CHANGE_ORG_GENERAL_FIELDS';
export const SET_GENERAL_FORM_CHECK_FIELDS = 'SET_GENERAL_FORM_CHECK_FIELDS';
export const SET_PRE_SCREEN_FORM_CHECK_FIELDS =
  'SET_PRE_SCREEN_FORM_CHECK_FIELDS';
export const SET_PERSON_CONFIG_FORM_CHECK_FIELDS =
  'SET_PERSON_CONFIG_FORM_CHECK_FIELDS';
export const SET_PROFILE_SETUP_FORM_CHECK_FIELDS =
  'SET_PROFILE_SETUP_FORM_CHECK_FIELDS';
export const CHANGE_ORG_PROFILE_SETUP_FIELDS =
  'CHANGE_ORG_PROFILE_SETUP_FIELDS';
export const CHANGE_ORG_PRE_SCREEN_FIELDS = 'CHANGE_ORG_PRE_SCREEN_FIELDS';
export const CHANGE_ORG_SURVEY_ALERT_FIELDS = 'CHANGE_ORG_SURVEY_ALERT_FIELDS';
export const SET_SURVEY_ALERT_FORM_CHECK_FIELDS =
  'SET_SURVEY_ALERT_FORM_CHECK_FIELDS';
export const SET_SURVEY_ALERT_FORM_COLOR_CHANGE_FIELDS =
  'SET_SURVEY_ALERT_FORM_COLOR_CHANGE_FIELDS';
export const CHANGE_PRE_SCREEN_DELIVERY_DAYS =
  'CHANGE_PRE_SCREEN_DELIVERY_DAYS';
export interface SetViewActionType {
  type: typeof SET_VIEW;
  view: string;
}
export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  bool: boolean;
}

export interface HandleOrgGeneralFieldsChangeAction {
  type: typeof CHANGE_ORG_GENERAL_FIELDS;
  e: React.ChangeEvent<HTMLInputElement>;
}
export interface SetGeneralFormChecksActionType {
  type: typeof SET_GENERAL_FORM_CHECK_FIELDS;
  status: boolean;
  name: string;
}

export interface HandleOrgProfileSetupFieldsChangeAction {
  type: typeof CHANGE_ORG_PROFILE_SETUP_FIELDS;
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
}

export interface HandleOrgPreScreenFieldsChangeAction {
  type: typeof CHANGE_ORG_PRE_SCREEN_FIELDS;
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
}

export interface HandleOrgSurveyAlertFieldsChangeAction {
  type: typeof CHANGE_ORG_SURVEY_ALERT_FIELDS;
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  category: string;
}

export interface SetPreScreenFormChecksActionType {
  type: typeof SET_PRE_SCREEN_FORM_CHECK_FIELDS;
  status: boolean;
  name: string;
}
export interface SetPersonConfigFormChecksActionType {
  type: typeof SET_PERSON_CONFIG_FORM_CHECK_FIELDS;
  status: boolean;
  personType: string;
  name: string;
}

export interface SetProfileSetupFormChecksActionType {
  type: typeof SET_PROFILE_SETUP_FORM_CHECK_FIELDS;
  status: boolean;
  name: string;
}

export interface SetSurveyAlertFormChecksActionType {
  type: typeof SET_SURVEY_ALERT_FORM_CHECK_FIELDS;
  status: boolean;
  name: string;
  category: string;
}

export interface SetSurveyAlertFormColorChangeActionType {
  type: typeof SET_SURVEY_ALERT_FORM_COLOR_CHANGE_FIELDS;
  colorIs: string;
  fileldName: string;
  colorField: string;
}

export interface ChangePreScreenDaysCheckActionType {
  type: typeof CHANGE_PRE_SCREEN_DELIVERY_DAYS;
  day: string;
  status: boolean;
}

export type OrgamizationsActionTypes =
  | SetIsLoadingAction
  | SetViewActionType
  | HandleOrgGeneralFieldsChangeAction
  | SetGeneralFormChecksActionType
  | SetPreScreenFormChecksActionType
  | SetPersonConfigFormChecksActionType
  | SetProfileSetupFormChecksActionType
  | HandleOrgProfileSetupFieldsChangeAction
  | HandleOrgPreScreenFieldsChangeAction
  | HandleOrgSurveyAlertFieldsChangeAction
  | SetSurveyAlertFormChecksActionType
  | SetSurveyAlertFormColorChangeActionType
  | ChangePreScreenDaysCheckActionType;

export const setView = (view: string): SetViewActionType => ({
  type: SET_VIEW,
  view,
});

export const setIsLoading = (bool: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  bool,
});

export const changeOrgGeneralFields = (
  e: React.ChangeEvent<HTMLInputElement>,
): HandleOrgGeneralFieldsChangeAction => ({
  type: CHANGE_ORG_GENERAL_FIELDS,
  e,
});

export const setGeneralFormChecks = (
  status: boolean,
  name: string,
): SetGeneralFormChecksActionType => ({
  type: SET_GENERAL_FORM_CHECK_FIELDS,
  status,
  name,
});

export const setPreScreenFormChecks = (
  status: boolean,
  name: string,
): SetPreScreenFormChecksActionType => ({
  type: SET_PRE_SCREEN_FORM_CHECK_FIELDS,
  status,
  name,
});

export const setPersonConfigFormChecks = (
  status: boolean,
  personType: string,
  name: string,
): SetPersonConfigFormChecksActionType => ({
  type: SET_PERSON_CONFIG_FORM_CHECK_FIELDS,
  status,
  personType,
  name,
});

export const setProfileSetupFormChecks = (
  status: boolean,
  name: string,
): SetProfileSetupFormChecksActionType => ({
  type: SET_PROFILE_SETUP_FORM_CHECK_FIELDS,
  status,
  name,
});

export const changeOrgProfileSetupFields = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
): HandleOrgProfileSetupFieldsChangeAction => ({
  type: CHANGE_ORG_PROFILE_SETUP_FIELDS,
  e,
});

export const changeOrgPreScreenFields = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
): HandleOrgPreScreenFieldsChangeAction => ({
  type: CHANGE_ORG_PRE_SCREEN_FIELDS,
  e,
});

export const changeOrgSurveyAlertFields = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  category: string,
): HandleOrgSurveyAlertFieldsChangeAction => ({
  type: CHANGE_ORG_SURVEY_ALERT_FIELDS,
  e,
  category,
});

export const setSurveyAlertFormChecks = (
  status: boolean,
  name: string,
  category: string,
): SetSurveyAlertFormChecksActionType => ({
  type: SET_SURVEY_ALERT_FORM_CHECK_FIELDS,
  status,
  name,
  category,
});

export const setSurveyAlertColorChange = (
  colorIs: string,
  fileldName: string,
  colorField: string,
): SetSurveyAlertFormColorChangeActionType => ({
  type: SET_SURVEY_ALERT_FORM_COLOR_CHANGE_FIELDS,
  colorIs,
  fileldName,
  colorField,
});

export const changePreScreenDeleveryDaysCheck = (
  day: string,
  status: boolean,
): ChangePreScreenDaysCheckActionType => ({
  type: CHANGE_PRE_SCREEN_DELIVERY_DAYS,
  day,
  status,
});

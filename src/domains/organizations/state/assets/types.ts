export interface OrganizationGeneral {
  name: string;
  awsSource: string;
  email: string;
  organizationType: string;
  schoolId: string;
  webUrl: string;
  address: string;
  district: string;
  checkOutEnabled: boolean;
  rapidCheckInEnabled: boolean;
}

export type OrganizationPreScreen = {
  staffPreScreen: boolean;
  studentPreScreen: boolean;
  sendToGuardian: boolean;
  customPreScreen: boolean;
  emailEnabled: boolean;
  smsEnabled: boolean;
  editSurveyResponse: boolean;
  deliveryPriority: number;
  maxBodyTemp: number;
  deliveryTime: string;
  smsMessage: string;
  emailTemplateId: string;
  emailMessage: string;
  deliveryDays: DeliveryDays[];
};
export type DeliveryDays = {
  day: string;
  active: boolean;
};

export type PersonConfig = {
  addEnabled: boolean;
  editEnabled: boolean;
};

export type OrganizationProfileSetup = {
  profileSetup: boolean;
  staffProfileSetup: boolean;
  sendProfileSetupToGuardian: boolean;
  smsMessage: string;
  emailTemplateId: string;
  emailMessage: string;
};

export type SurveyEmailType = {
  subject: string;
  bodyText: string;
};

export type MedicalAlertType = {
  subject: string;
  bodyText: string;
};

export type EmailAlertContactConfigType = {
  bodyAsHTML: boolean;
  subject: string;
  bodyText: string;
};

export type ThemeType = {
  primaryColor: string;
  accentColor: string;
};

export const emptyOrgGeneral = {
  name: 'New Organization',
  awsSource: '',
  email: '',
  organizationType: '',
  schoolId: '',
  webUrl: '',
  address: '',
  district: '',
  checkOutEnabled: true,
  rapidCheckInEnabled: false,
};

export const emptyOrgPreScreen = {
  staffPreScreen: true,
  studentPreScreen: false,
  sendToGuardian: false,
  customPreScreen: false,
  emailEnabled: true,
  smsEnabled: false,
  editSurveyResponse: false,
  deliveryPriority: 0,
  maxBodyTemp: 100,
  deliveryTime: '10:00 PM',
  smsMessage: '',
  emailTemplateId: '',
  emailMessage: '',
  deliveryDays: [
    {
      day: 'Monday',
      active: false,
    },
    {
      day: 'Tuesday',
      active: false,
    },
    {
      day: 'Wednesday',
      active: false,
    },
    {
      day: 'Thursday',
      active: false,
    },
    {
      day: 'Friday',
      active: false,
    },
    {
      day: 'Saturday',
      active: false,
    },
    {
      day: 'Sunday',
      active: false,
    },
  ],
};

export const initialStaff = {
  addEnabled: true,
  editEnabled: false,
};

export const initialStudent = {
  addEnabled: true,
  editEnabled: false,
};

export const initialVisitor = {
  addEnabled: true,
  editEnabled: true,
};

export const initialOrganizationProfileSetup = {
  profileSetup: true,
  staffProfileSetup: false,
  sendProfileSetupToGuardian: false,
  smsMessage: '',
  emailTemplateId: '',
  emailMessage: '',
};

export const initialOrganizationSurveyAlert = {
  surveyEmail: {
    subject: '',
    bodyText: '',
  },
  medicalAlert: {
    subject: '',
    bodyText: '',
  },
  emailAlertContactConfig: {
    bodyAsHTML: true,
    subject: '',
    bodyText: '',
  },
  theme: {
    primaryColor: '#333299',
    accentColor: '#FDD119',
  },
};

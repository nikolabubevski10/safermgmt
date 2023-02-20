export interface IUserAccount {
  id?: string;
  email: string;
  name: IName;
  phone?: IPhone;
  isActive: boolean;
  credentials?: ICredentials;
  district?: IDistrict;
  roles?: IUserAccountRoles;
  _typeName?: string;
}

export interface IUserAccountRoles {
  busDriver: IBusDriver;
  contact: IContact;
  districtAdmin: IDistrictAdmin;
  staff: IStaff;
  student: IStudent;
  teacher: ITeacher;
}

export interface IBusDriver {
  id?: string;
  driverNumber?: string;
  sisId?: string;
}

export interface IContact {
  id?: string;
  sisId?: string;
}

export interface IDistrictAdmin {
  id?: string;
  title?: string;
}

export interface IStaff {
  id?: string;
  department?: string;
  staffId?: string;
  staffRoles: string[];
  title?: string;
}

export interface IStudent {
  contacts: IContactRelationship[];
  dateOfBirth: string;
  gender: IGender;
  grade: IGrade;
  graduationYear?: string;
  hispanicEthnicity?: boolean;
  id?: string;
  race: IRace;
  sisId?: string;
  stateId?: string;
  studentNumber?: string;
}

export interface ITeacher {
  id?: string;
  sisId?: string;
  stateId?: string;
  teacherNumber?: string;
  title?: string;
}

export interface IOrganization {
  id?: string;
  name: string;
  isActive: boolean;
  title: string;
  _typename?: string;
}

export interface IAccessLevel {
  name: string;
  isActive: boolean;
  id?: string;
  title?: string;
}

export interface IEmployee {
  id?: string;
  firstName: string;
  lastName: string;
  emailAddress: {
    emailAddress: string;
  }[];
  phoneNumber: {
    id?: string;
    phoneNumber: string;
  }[];
}

export interface IDistrictContact {
  id?: string;
  email: string;
  name: IName;
  phone?: IPhone;
  title?: string;
}

export interface IDistrictState {
  id?: string;
  name: string;
}

export interface IDistrict {
  districtContact?: IDistrictContact;
  id?: string;
  lastSync?: string;
  launchDate?: string;
  loginMethods: ILoginMethod[];
  name: string;
  pauseEnd?: string;
  pauseStart?: string;
  portalUrl?: string;
  sisType: ISisType;
  state: IDistrictState;
}

export interface IName {
  id?: string;
  first: string;
  last: string;
  middle?: string;
}

export interface IPhone {
  id?: string;
  phone: string;
  phoneType: IPhoneType;
}

export interface IPhoneType {
  id?: string;
  name: string;
  order: number;
}

export interface ILoginMethod {
  description?: string;
  id?: string;
  name: string;
}

export interface ISisType {
  id?: string;
  name: string;
}

export interface ICredentials {
  districtUsername?: string;
  firebaseEmail?: string;
  firebaseUserAccountId?: string;
  id?: string;
}

export interface ILocation {
  city?: string;
  coordinates?: ICoordinates;
  country?: string;
  id?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  state?: IState;
  zipCode?: string;
}

export interface ICoordinates {
  id?: string;
  latitude?: number;
  longitude?: number;
}

export interface IState {
  abbr: string;
  id?: string;
  name: string;
}

export interface IContactRelationship {
  relationship: IRelationship;
  relationshipType: IRelationshipType;
  userAccount: IUserAccount;
}

export interface IRelationship {
  id?: string;
  name: string;
  order: number;
}

export interface IRelationshipType {
  id?: string;
  name: string;
  order: number;
}

export interface IGender {
  abbr: string;
  id?: string;
  name: string;
  order: number;
}

export interface IGrade {
  id?: string;
  name: string;
  order: number;
}

export interface IRace {
  id?: string;
  name: string;
  order: number;
}

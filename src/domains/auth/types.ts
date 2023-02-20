export interface ICurrentUserData {
  id: string;
  district: {
    id: string;
  };
  roles: {
    student: {
      id: string;
    };
    busDriver: {
      id: string;
    };
    contact: {
      id: string;
    };
    districtAdmin: {
      id: string;
    };
    staff: {
      id: string;
    };
    teacher: {
      id: string;
    };
  };
}

export enum RolesEnum {
  busDriver = 'busDriver',
  contact = 'contact',
  districtAdmin = 'districtAdmin',
  MedicalAdmin = 'MedicalAdmin',
  SchoolTechLead = 'SchoolTechLead',
  staff = 'staff',
  student = 'student',
  teacher = 'teacher',
}

export interface IUser {
  uid: string | null;
  roles: (keyof typeof RolesEnum)[];
  userAccountId: string | null;
}

type TDataRole = {
  __typename?: string;
  id: string;
  staffRoles?: string[];
} | null;

export type TRoleEntry = [string, TDataRole];

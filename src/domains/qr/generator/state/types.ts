export interface IContact {
  firstName: string;
  middleName: string;
  lastName: string;
  id: string;
  isSelected: boolean;
  relationship: string;
  relationshipType: string;
  valueToEncode: string;
}

export interface IDataContact {
  relationship: {
    name: string;
  };
  relationshipType: {
    name: string;
  };
  userAccount: {
    id: string;
    name: {
      first: string;
      middle: string;
      last: string;
    };
  };
}

export type TDataStudent = {
  id: string;
  contacts: IDataContact[];
} | null;

export interface IPerson {
  firstName: string;
  middleName: string;
  lastName: string;
  roles: string[];
  id: string;
  valueToEncode: string;
  isSelected: boolean;
  contacts?: IContact[];
  schoolId: string;
}

export type TDataSchoolUser = {
  id: string;
  name: {
    first: string | null;
    middle: string | null;
    last: string | null;
  };
  roles: {
    staff: {
      id: string;
    } | null;
    student: TDataStudent;
    teacher: {
      id: string;
    } | null;
  };
};

export interface ISchool {
  name: string;
  id: string;
  status: string;
  __typename?: string;
}

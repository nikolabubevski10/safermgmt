export enum StatusEnum {
  P = 'P',
  U = 'U',
  OCT = 'OCT',
  RAE = 'RAE',
}

export interface IDataAttendanceRecord {
  id: string;
  eventDate: string;
  status: {
    abbr: keyof typeof StatusEnum;
  };
  userAccount: {
    id: string;
    name: {
      first: string;
      middle: string;
      last: string;
    };
    roles: {
      student: {
        id: string;
        grade: {
          name: string;
        };
      } | null;
    };
  };
}

export interface ISchoolsRecord {
  status: string;
  id: number;
  schoolName: string;
}

export interface IDataSchoolsRecord {
  status: string;
  id: number;
  name: string;
}

export interface IAttendanceRecord {
  status: keyof typeof StatusEnum;
  id: string;
  eventDate: string;
  name: string;
  grade: string;
  userAccountId: string;
}

export interface IDate {
  startDate: Date;
  endDate: Date;
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

export type TStudentDatum = {
  name: string;
  grade: string;
  userAccountId: string;
  P: number;
  U: number;
  OCT: number;
  RAE: number;
};

export type TStudentsData = TStudentDatum[];

export interface IStudent {
  name: string;
  isAttending: boolean;
}

export interface ICourse {
  name: string;
  id: string;
  room: string;
  building: string;
  students: IStudent[];
}

export interface ITeacher {
  name: string;
  courses: ICourse[];
}

export interface IDataAttendance {
  eventDate: string;
  userAccount: {
    id: string;
  };
}

export interface ISurveyReport {
  isComplete: boolean;
  userRoles: string[];
  userAccountId: string;
  name: string;
  date: Date;
}

export interface IDataSurveyResponse {
  updatedAt: string;
  answers: {
    id: string;
    value: boolean;
  }[];
  survey: {
    questions: {
      id: string;
    }[];
  };
  userAccount: {
    name: {
      first: string;
      middle: string;
      last: string;
    };
    id: string;
    roles: {
      student: {
        id: string;
      } | null;
      staff: {
        id: string;
      } | null;
      teacher: {
        id: string;
      } | null;
    };
  };
}

export type TQuestion = {
  text: string;
  isActive: boolean;
  id?: string;
  sequence: number;
  surveyId: string;
};

export interface ISurvey {
  name: string;
  isActive: boolean;
  id: string;
  questions: TQuestion[];
  header: string;
}

import { SurveysHistory } from '../SurveysReducer';
import { ISurvey } from '../../../types';

const updateSurveysHistory = (
  surveysHistory: SurveysHistory,
  newSurveys: ISurvey[],
): SurveysHistory => {
  if (!newSurveys) return surveysHistory;
  const newSurveysHistory = [newSurveys, ...surveysHistory];
  if (newSurveysHistory.length >= 30) newSurveysHistory.pop();
  return newSurveysHistory;
};

export default updateSurveysHistory;

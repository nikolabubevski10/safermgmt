import { IDataSurveyResponse, ISurveyReport } from '../types';
import formatName from './formatName';
import roles from '../assets/roles';

const prepareSurveyResponseData = (
  surveyReponseData: IDataSurveyResponse[],
): ISurveyReport[] => {
  return surveyReponseData.map((surveyResponse) => {
    const { survey, userAccount, updatedAt } = surveyResponse;

    const questionCount = survey.questions.length;
    const answerCount = surveyResponse.answers.length;
    const isComplete = answerCount === questionCount;

    const { student, teacher, staff } = userAccount.roles;
    const userRoles = [
      student ? roles.student : '',
      teacher ? roles.teacher : '',
      staff ? roles.staff : '',
    ].filter((role) => role !== '');

    const name = formatName(userAccount.name);

    const date = new Date(updatedAt);

    return {
      isComplete,
      userRoles,
      userAccountId: userAccount.id,
      name,
      date,
    };
  });
};

export default prepareSurveyResponseData;

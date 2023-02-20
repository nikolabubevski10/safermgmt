import { Adapter } from './types';
import schoolUsers from '../api/queries/schoolUsers';

interface IGetSchoolUsers {
  schoolId: string;
}

export default async ({ schoolId }: IGetSchoolUsers): Promise<Adapter> => {
  try {
    const res = await schoolUsers({ schoolId });

    if (!res) {
      return { success: true };
    }

    return { success: true, data: res.data };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      error: 'Something went wrong with getting persons',
    };
  }
};

import { Adapter } from './types';
import getStudent from '../api/queries/student';

interface IGetStudent {
  schoolId: number;
  id: number;
}

export default async ({ schoolId, id }: IGetStudent): Promise<Adapter> => {
  try {
    const student = await getStudent({ schoolId, id });

    if (!student) {
      return { success: true };
    }

    return { success: true, data: student.data };
  } catch (err) {
    return {
      success: false,
      error: 'Something went wrong with getting the user',
    };
  }
};

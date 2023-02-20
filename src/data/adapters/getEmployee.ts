import { Adapter } from './types';
import employee from '../api/queries/getEmployee';

interface IGetEmployee {
  id: number;
}

export default async ({ id }: IGetEmployee): Promise<Adapter> => {
  try {
    const { data, error, success } = await employee({
      id,
    });

    if (!success) {
      throw error;
    }

    return { success: true, data };
  } catch (err: unknown) {
    const stringError = typeof err !== 'string' ? '' : err;
    return { success: false, error: stringError };
  }
};

import { Adapter } from './types';
import currentUser from '../api/queries/currentUser';

export default async (): Promise<Adapter> => {
  try {
    const { success, error, data } = await currentUser();

    if (!success) {
      throw error;
    }

    return { success: true, error, data };
  } catch (err) {
    const errorMessage = 'Something went wrong with sending your email';
    return {
      success: false,
      error: errorMessage,
    };
  }
};

import { Adapter } from './types';
import logoutUser from '../firebase/functions/logoutUser';

export default async (): Promise<Adapter> => {
  try {
    const { success, error } = await logoutUser();

    if (!success) {
      throw error;
    }

    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err,
    };
  }
};

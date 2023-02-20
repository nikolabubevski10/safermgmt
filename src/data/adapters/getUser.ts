import { Adapter } from './types';
import getUser from '../firebase/functions/getUser';

export default async (): Promise<Adapter> => {
  try {
    const user = await getUser();

    if (!user) {
      return { success: true };
    }

    const userData = {
      user: {
        uid: user.uid,
      },
    };

    return { success: true, data: userData };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      error: 'Something went wrong with getting the user',
    };
  }
};

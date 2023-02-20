import { Adapter } from './types';
import loginUser from '../firebase/functions/loginUser';

interface ILoginUserDataArgs {
  email: string;
  password: string;
}

export default async ({
  email,
  password,
}: ILoginUserDataArgs): Promise<Adapter> => {
  try {
    const { success, error, user } = await loginUser({
      email,
      password,
    });

    if (!success) {
      throw error;
    }

    const userData = {
      user: {
        uid: user?.uid,
      },
    };

    return { success: true, data: userData };
  } catch (err) {
    return {
      success: false,
      error: err,
    };
  }
};

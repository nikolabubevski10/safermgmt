import { Adapter } from './types';
import reauthenticateUser from '../firebase/functions/reauthenticateUser';

interface IReAuthenticateUserDataArgs {
  email: string;
  password: string;
}

export default async ({
  email,
  password,
}: IReAuthenticateUserDataArgs): Promise<Adapter> => {
  try {
    const { success, error, user } = await reauthenticateUser({
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

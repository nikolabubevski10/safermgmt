import { Adapter } from './types';
import forgotUserPassword from '../firebase/functions/forgotUserPassword';

interface IForgotUserPasswordDataArgs {
  email: string;
}

export default async ({
  email,
}: IForgotUserPasswordDataArgs): Promise<Adapter> => {
  try {
    const { success, error } = await forgotUserPassword({
      email,
    });

    if (!success) {
      throw error;
    }

    return { success: true };
  } catch (err) {
    const stringError = err as string;
    return {
      success: false,
      error: stringError,
    };
  }
};

import { auth } from '../';

interface IForgotUserPasswordDataArgs {
  email: string;
}

interface ForgottUserPasswordData {
  success: boolean;
  error?: string;
}

export default async ({
  email,
}: IForgotUserPasswordDataArgs): Promise<ForgottUserPasswordData> => {
  try {
    await auth.sendPasswordResetEmail(email);

    return { success: true };
  } catch (err) {
    if (err.code !== 'auth/user-not-found') {
      const errorMessage =
        'Something went wrong with trying to reset your password';
      return { success: false, error: errorMessage };
    }

    // successful even if user is not found
    return { success: true };
  }
};

import { auth } from '../';

interface ILogoutUserData {
  success: boolean;
  error?: string;
}

export default async (): Promise<ILogoutUserData> => {
  try {
    await auth.signOut();

    return { success: true };
  } catch (err) {
    console.error(err);

    const errorMessage =
      'Something went wrong with signing out of your account';

    return { success: false, error: errorMessage };
  }
};

import firebase, { auth } from '../';

interface IReauthenticateUserDataArgs {
  email: string;
  password: string;
}

interface IReauthenticateUserData {
  success: boolean;
  error?: string;
  user?: firebase.User;
}

export default async ({
  email,
  password,
}: IReauthenticateUserDataArgs): Promise<IReauthenticateUserData> => {
  try {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      return {
        success: false,
        error: 'Something went wrong with logging in',
      };
    }

    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password,
    );

    const { user } = await currentUser.reauthenticateWithCredential(credential);

    if (!user) {
      return {
        success: false,
        error: 'Something went wrong with logging in',
      };
    }

    return { success: true, user };
  } catch (err) {
    let errorMessage;

    if (err.code === 'auth/user-not-found') {
      errorMessage = 'The email or password is incorrect';
    } else if (err.code === 'auth/wrong-password') {
      errorMessage = 'The email or password is incorrect';
    } else if (err.code === 'auth/too-many-requests') {
      errorMessage = err.message;
    } else {
      errorMessage = 'Something went wrong with logging in';
    }

    return { success: false, error: errorMessage };
  }
};

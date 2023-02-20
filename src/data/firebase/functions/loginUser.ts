import firebase, { auth } from '../';

interface ILoginUserDataArgs {
  email: string;
  password: string;
}

interface ILoginUserData {
  success: boolean;
  error?: string;
  user?: firebase.User;
}

export default async ({
  email,
  password,
}: ILoginUserDataArgs): Promise<ILoginUserData> => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);

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

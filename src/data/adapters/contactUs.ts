import { Adapter } from './types';
import contactUs from '../api/mutations/contacUs';

interface IContactUsDataArgs {
  email: string;
  fullName: string;
  message: string;
  organization: string;
}

export default async ({
  email,
  fullName,
  message,
  organization,
}: IContactUsDataArgs): Promise<Pick<Adapter, 'error' | 'success'>> => {
  try {
    const { success, error } = await contactUs({
      email,
      fullName,
      message,
      organization,
    });

    if (!success) {
      throw error;
    }

    return { success: true };
  } catch (err) {
    const errorMessage = 'Something went wrong with sending your email';
    return {
      success: false,
      error: errorMessage,
    };
  }
};

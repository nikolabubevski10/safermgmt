import { Adapter } from './types';
import saveProfileData from '../firebase/functions/saveProfileData';

interface ISaveProfileDataArgs {
  photo: string;
  phone: string;
  personId: string;
}

export default async ({
  photo,
  phone,
  personId,
}: ISaveProfileDataArgs): Promise<Adapter> => {
  try {
    await saveProfileData({
      photo,
      phone,
      personId,
    });

    return { success: true };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      error: 'Something went wrong with updating your profile',
    };
  }
};

import { firestore as db } from '../';

import uploadFile from './uploadFile';

interface ISaveProfileDataArgs {
  photo: string;
  phone: string;
  personId: string;
}

export default async ({
  photo,
  phone,
  personId,
}: ISaveProfileDataArgs): Promise<void> => {
  const time = new Date().getTime();
  const pathToUpload = `images/${personId}/profile-${time}`;

  const { downloadUrl } = await uploadFile(photo, pathToUpload);

  const unformattedPhoneNumber = phone.replaceAll('-', '');

  const docPath = `organization/myTest/students`;
  const docId = 'myTest';

  await db.collection(docPath).doc(docId).set(
    {
      photoUrl: downloadUrl,
      cellPhone: unformattedPhoneNumber,
      profileSetup: true,
    },
    { merge: true },
  );
};

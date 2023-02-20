import { gql } from '@apollo/client';
import { client } from '../../../apollo';

interface ContactUsArgs {
  email: string;
  fullName: string;
  message: string;
  organization: string;
}

interface ContactUsData {
  error?: string;
  success: boolean;
}

const CONTACT_US = gql`
  mutation ContactUs($input: ContactUsInput!) {
    contactUs(input: $input)
  }
`;

export default async ({
  email,
  fullName,
  message,
  organization,
}: ContactUsArgs): Promise<ContactUsData> => {
  try {
    const { data } = await client.mutate({
      mutation: CONTACT_US,
      variables: {
        input: {
          email,
          fullName,
          message,
          organization,
        },
      },
    });

    if (!data.contactUs) {
      return { success: false };
    }

    return { success: true };
  } catch (err) {
    const errorMessage = 'Something went wrong with sending your email';

    return { error: errorMessage, success: false };
  }
};

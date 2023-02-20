import React from 'react';
import profile from '../../../../../../assets/images/logo.svg';
import FlagButton from '../icon-buttons/FlagButton';
import StarButton from '../icon-buttons/StarButton';
import {
  Container,
  CardCover,
  CardHead,
  ProfileContainer,
  HeadData,
  NameContainer,
  ContactRelation,
  AdditionalInfoContainer,
  Block,
  FieldTitle,
  FieldValue,
  IconsContainer,
} from './ContactCardStyles';
import { useTranslation } from 'react-i18next';

interface IContact {
  name: string;
  relation: string;
  cellPhone: string;
  workPhone: string;
  HomePhone: string;
  email?: string;
}

interface Props {
  contact: IContact;
}
const ContactCard: React.FC<Props> = (props: Props) => {
  const { contact } = props;
  const { t } = useTranslation();

  const tCellPhone = t('Cell Phone');
  const tWorkPhone = t('Work Phone');
  const tHomePhone = t('Home Phone');
  const tEmail = t('Email');

  const testCell = '662-616-6404';
  const testEmail = 'relativename123@gmail.com';

  return (
    <Container>
      <CardCover>
        <CardHead>
          <ProfileContainer>
            <img src={profile} alt="contact-profile" />
          </ProfileContainer>
          <HeadData>
            <NameContainer>{contact.name}</NameContainer>
            <ContactRelation>{contact.relation}</ContactRelation>
          </HeadData>
        </CardHead>
        <AdditionalInfoContainer>
          <Block>
            <FieldTitle>{tCellPhone}</FieldTitle>
            <FieldValue>{testCell}</FieldValue>
            <IconsContainer>
              <StarButton />
              <FlagButton />
            </IconsContainer>
          </Block>
          <Block>
            <FieldTitle>{tWorkPhone}</FieldTitle>
            <FieldValue>{testCell}</FieldValue>
            <IconsContainer>
              <StarButton />
              <FlagButton />
            </IconsContainer>
          </Block>
          <Block>
            <FieldTitle>{tHomePhone}</FieldTitle>
            <FieldValue>{testCell}</FieldValue>
            <IconsContainer>
              <StarButton />
              <FlagButton />
            </IconsContainer>
          </Block>
          <Block>
            <FieldTitle>{tEmail}</FieldTitle>
            <FieldValue>{testEmail}</FieldValue>
            <IconsContainer>
              <StarButton />
              <FlagButton />
            </IconsContainer>
          </Block>
        </AdditionalInfoContainer>
      </CardCover>
    </Container>
  );
};

export default ContactCard;

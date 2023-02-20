import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from './input';

import { Container, FormGroups, FormGroup, Field } from './ProfileFormStyles';

interface FormData {
  name: string;
  stuffId: string;
  email: string;
  phoneNumber: number;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: 'Shawn Carter',
    stuffId: 'TlSM7NN0XlmlqgvZ2xYA',
    email: 'test@gmail.com',
    phoneNumber: 1234567899,
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.value) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    } else {
      setFormErrors({ ...formErrors, [e.target.name]: mustBeFilledText });
    }
  };

  const { t } = useTranslation();
  const mustBeFilledText = t('Must be filled');

  return (
    <Container>
      <FormGroups>
        <Field>
          <FormGroup>
            <Input
              error={formErrors.name}
              label="Full Name"
              name="name"
              onChange={handleChange}
              type="text"
              value={formData.name}
            />
          </FormGroup>
          <FormGroup>
            <Input
              error={formErrors.email}
              label="Email"
              name="email"
              onChange={handleChange}
              type="email"
              value={formData.email}
              disabled={true}
            />
          </FormGroup>
        </Field>
        <Field>
          <FormGroup>
            <Input
              label="Stuff Id"
              name="stuffId"
              onChange={handleChange}
              type="text"
              value={formData.stuffId}
            />
          </FormGroup>

          <FormGroup>
            <Input
              error={formErrors.phoneNumber}
              label="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              type="number"
              value={formData.phoneNumber}
              disabled={true}
            />
          </FormGroup>
        </Field>
      </FormGroups>
    </Container>
  );
};

export default Form;

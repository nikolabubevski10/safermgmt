import { useCallback, useState, useEffect } from 'react';
import { ObjectSchema } from 'yup';
import * as yup from 'yup';

export interface IForm {
  [key: string]: {
    text: string;
    isValid: boolean;
  };
}

type textInputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type selectInputEvent = React.ChangeEvent<HTMLSelectElement>;
export type handleInputChangeType = (
  e: textInputEvent | selectInputEvent,
) => void;

type returnType = {
  form: IForm;
  handleInputChange: handleInputChangeType;
  clearForm: () => void;
  isValidForm: boolean;
  setForm: React.Dispatch<React.SetStateAction<IForm>>;
};

const generateInitialState = (fieldArray: string[], initialForm?: IForm) => {
  if (initialForm) return initialForm;
  const result = fieldArray.reduce((acc: IForm, field) => {
    const newField = {
      [field]: {
        text: '',
        isValid: true,
      },
    };
    return { ...acc, ...newField };
  }, {});
  return result;
};

function useForm(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yupSchema: ObjectSchema<any>,
  initialForm?: IForm,
): returnType {
  const keys = yup.reach(yupSchema, '')._nodes;

  // local state
  const [form, setForm] = useState<IForm>(
    generateInitialState(keys, initialForm),
  );

  useEffect(() => {
    setForm(generateInitialState(keys, initialForm));
  }, [initialForm]);

  useEffect(() => {
    yupSchema.validate(form).then(() => {
      setIsValidForm(true);
    });
  }, [form]);

  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  const handleInputChange = useCallback(
    (e: textInputEvent | selectInputEvent) => {
      const { name, value } = e.target;

      // test form
      const testForm = { ...form };
      testForm[name].text = value;

      const fieldNameRegExp = /[^.]*/;

      yupSchema
        .validate(testForm, { abortEarly: false })
        .then((newForm) => {
          newForm[name].isValid = true;
          setForm(newForm);
          const newIsValidForm = Object.values(newForm).reduce(
            (acc, val) => acc && val.isValid,
            true,
          );
          setIsValidForm(newIsValidForm);
        })
        .catch(({ errors }) => {
          setIsValidForm(false);
          const newForm = { ...form };

          const erroneousKeys = errors.reduce((acc: string[], err: string) => {
            let field = '';
            const match = err.match(fieldNameRegExp);
            if (match) field = match[0];
            if (field) return [...acc, field];
            return acc;
          }, []);

          keys.forEach((key: string) => {
            if (erroneousKeys.includes(key)) {
              newForm[key].isValid = false;
            } else {
              newForm[key].isValid = true;
            }
          });

          setForm(newForm);
        });
    },
    [form, yupSchema],
  );

  const clearForm = useCallback(() => {
    setForm(generateInitialState(keys));
    setIsValidForm(false);
  }, [keys]);

  return {
    handleInputChange,
    form,
    clearForm,
    isValidForm,
    setForm,
  };
}

export default useForm;

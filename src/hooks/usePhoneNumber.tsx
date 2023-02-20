import {
  useState,
  ChangeEvent,
  ReactText,
  Dispatch,
  SetStateAction,
} from 'react';
import { PhoneNumberUtil } from 'google-libphonenumber';

interface returnValue {
  inputValue: string;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  setInputValue: Dispatch<SetStateAction<string>>;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
}

function usePhoneNumber(): returnValue {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isInteger = (maybeInteger: ReactText) => {
    const valueAsString = `${maybeInteger}`;
    return `${parseInt(valueAsString, 10)}` === valueAsString;
  };

  const isOnlyIntegers = (charArray: string[]) => {
    return !charArray.some((char) => !isInteger(char));
  };

  const insertDashes = (charArray: string[]) => {
    const hasAreaCode = charArray.length >= 3;
    const hasExchangeCode = charArray.length >= 6;

    const areaCode = charArray.slice(0, 3).join('');
    const exchangeCode = hasAreaCode ? charArray.slice(3, 6).join('') : '';
    const subscriberNumber = hasExchangeCode
      ? charArray.slice(6, 10).join('')
      : '';

    const areaCodeDash = hasAreaCode ? '-' : '';
    const exchangeCodeDash = hasExchangeCode ? '-' : '';

    return `${areaCode}${areaCodeDash}${exchangeCode}${exchangeCodeDash}${subscriberNumber}`;
  };

  const validate = (phoneNumber: string): boolean => {
    try {
      const number = phoneUtil.parse(phoneNumber, 'US');
      return phoneUtil.isValidNumberForRegion(number, 'US');
    } catch (err) {
      return false;
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isDelete = inputValue.length > value.length;
    const charArray = Array.from(value).filter((char) => char !== '-');

    if (isOnlyIntegers(charArray)) {
      if (isDelete) {
        const shouldDeleteTwo = value.length === 3 || value.length === 7;
        if (shouldDeleteTwo) {
          const sliced = value.slice(0, -1);
          setInputValue(sliced);
          setIsValid(validate(sliced));
        } else {
          setInputValue(value);
          setIsValid(validate(value));
        }
      } else {
        const withDashes = insertDashes(charArray);
        setInputValue(withDashes);
        setIsValid(validate(value));
      }
    }
  };

  return {
    inputValue,
    handleInput,
    setInputValue,
    isValid,
    setIsValid,
  };
}

export default usePhoneNumber;

import { IPerson, ISchool, IContact } from '../../../state/types';
import drawIdCardToCanvas from './drawIdCardToCanvas';
import saveToZip from './saveToZip';
import JSZip from 'jszip';
import { SetStateAction, Dispatch } from 'react';

interface IDownloadNames {
  [x: string]: number;
}

const handleMultipleDownload = async ({
  persons,
  currentSchool,
  width,
  setGeneratedCount,
  setIsLoading,
}: {
  persons: (IPerson | IContact)[];
  currentSchool: ISchool | undefined;
  width: number;
  setGeneratedCount?: Dispatch<SetStateAction<number>>;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}): Promise<void> => {
  if (setIsLoading) setIsLoading(true);

  const zip = new JSZip();

  const downloadNames: IDownloadNames = {};

  for (let i = 0; i < persons.length; i++) {
    const personOrContact = persons[i];
    const firstName = personOrContact.firstName || '';
    const middleName = personOrContact.middleName || '';
    const lastName = personOrContact.lastName || '';
    const name = `${firstName} ${lastName}`;

    const id = personOrContact.id || '';
    const organization = currentSchool?.name || '';
    const valueToEncode = personOrContact.valueToEncode || '';

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = 0.8336 * canvas.width;
    canvas.id = id;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const accessor = `${lastName}${firstName}${middleName}`;
    let downloadName = `${lastName}-${firstName}-${middleName}-ID-Cards`;

    const existingName = downloadNames[accessor];

    if (typeof existingName === 'number') {
      downloadNames[accessor] += 1;
      downloadName += `(${downloadNames[accessor]})`;
    } else {
      downloadNames[accessor] = 0;
    }

    const cb = () =>
      saveToZip({
        canvas,
        downloadName,
        persons,
        zip,
        index: i,
        setGeneratedCount,
        setIsLoading,
      });

    await drawIdCardToCanvas({
      name,
      id,
      width,
      organization,
      valueToEncode,
      ctx,
      cb,
    });
  }
};

export default handleMultipleDownload;

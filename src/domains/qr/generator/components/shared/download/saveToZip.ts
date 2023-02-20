import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { IPerson, IContact } from '../../../state/types';
import { SetStateAction, Dispatch } from 'react';

const saveToZip = ({
  canvas,
  downloadName,
  persons,
  zip,
  index,
  setGeneratedCount,
  setIsLoading,
}: {
  canvas: HTMLCanvasElement;
  downloadName: string;
  persons: (IPerson | IContact)[];
  zip: JSZip;
  index: number;
  setGeneratedCount?: Dispatch<SetStateAction<number>>;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}): void => {
  const pngUrl = canvas
    .toDataURL('image/png')
    .replace(/^data:image\/(png|jpg);base64,/, '');

  const img = zip.folder('ID-Cards');
  if (img) {
    img.file(`${downloadName}.png`, pngUrl, { base64: true });
    if (setGeneratedCount) setGeneratedCount((prev) => prev + 1);
  }

  const isLast = index === persons.length - 1;

  if (isLast) {
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      saveAs(content, 'ID-Cards.zip');
      if (setIsLoading) setIsLoading(false);
      if (setGeneratedCount) setGeneratedCount(0);
    });
  }
};

export default saveToZip;

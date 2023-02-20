import imageCompression from 'browser-image-compression';

import { storage } from '../';

interface IUploadFile {
  success: boolean;
  error?: string;
  downloadUrl?: string;
}

export default async (file: string, path: string): Promise<IUploadFile> => {
  try {
    if (!file) {
      throw new Error('File is required to upload');
    }

    const compressionOptions = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };

    const tempFile = await imageCompression.getFilefromDataUrl(
      file,
      'temp.jpg',
      new Date().getTime(),
    );
    const compressedFile = await imageCompression(tempFile, compressionOptions);
    const dataUrl = await imageCompression.getDataUrlFromFile(compressedFile);

    if (!dataUrl) {
      throw new Error('File compression failed');
    }

    const mimeType =
      dataUrl.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/) || null;

    // trim off the part of the payload that is not part of the base64 string
    const base64EncodedImageString = dataUrl.replace(
      /^data:image\/\w+;base64,/,
      '',
    );

    const metadata: { contentType?: string } = {};
    if (mimeType) metadata.contentType = mimeType[1];

    const storageRef = storage.ref();

    const snapshot = await storageRef
      .child(path)
      .putString(base64EncodedImageString, 'base64', metadata);

    const downloadUrl = await snapshot.ref.getDownloadURL();

    return { success: true, downloadUrl };
  } catch (err) {
    return {
      success: false,
      error: err,
    };
  }
};

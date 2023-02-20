import { useState, createRef, useEffect } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

type returnType = {
  openSignatureModal: () => void;
  closeSignatureModal: () => void;
  shouldShowSignatureModal: boolean;
  signatureModalRef: React.RefObject<HTMLDivElement>;
};

function useSignatureModal(): returnType {
  const signatureModalRef = createRef<HTMLDivElement>();
  const [contactModal, setContactModal] = useState<HTMLElement | null>(null);
  const [
    shouldShowSignatureModal,
    setShouldShowSignatureModal,
  ] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  useEffect(() => {
    if (signatureModalRef) setContactModal(signatureModalRef.current);
  }, [signatureModalRef]);

  const closeSignatureModal = () => {
    setShouldShowSignatureModal(false);
    contactModal && enableBodyScroll(contactModal);
  };

  const openSignatureModal = () => {
    setShouldShowSignatureModal(true);
    contactModal && disableBodyScroll(contactModal);
  };

  return {
    closeSignatureModal,
    openSignatureModal,
    shouldShowSignatureModal,
    signatureModalRef,
  };
}

export default useSignatureModal;

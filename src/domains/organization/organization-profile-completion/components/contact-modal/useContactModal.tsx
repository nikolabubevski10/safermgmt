import { useState, createRef, useEffect } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

type returnType = {
  openContactModal: () => void;
  closeContactModal: () => void;
  shouldShowContactModal: boolean;
  contactModalRef: React.RefObject<JSX.Element>;
};

function useContactModal(): returnType {
  const contactModalRef = createRef<JSX.Element>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contactModal, setContactModal] = useState<any | null>(null);
  const [shouldShowContactModal, setShouldShowContactModal] = useState<boolean>(
    false,
  );

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  useEffect(() => {
    if (contactModalRef) setContactModal(contactModalRef.current);
  }, [contactModalRef]);

  const closeContactModal = () => {
    setShouldShowContactModal(false);
    contactModal && enableBodyScroll(contactModal);
  };

  const openContactModal = () => {
    setShouldShowContactModal(true);
    contactModal && disableBodyScroll(contactModal);
  };

  return {
    closeContactModal,
    openContactModal,
    shouldShowContactModal,
    contactModalRef,
  };
}

export default useContactModal;

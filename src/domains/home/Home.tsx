import React from 'react';
import { Container } from './HomeStyles';
import Byod from './components/byod/Byod';
import DataSync from './components/dataSync/DataSync';
import DigitalIdCards from './components/digitalIdCards/DigitalIdCards';
import FacialRec from './components/facialRec/FacialRec';
import FinalCTA from './components/finalCTA/FinalCTA';
import Footer from './components/footer/Footer';
import Header from '../page-layouts/header/Header';
import Hero from './components/hero/Hero';
import RapidSafety from './components/rapidSafety/RapidSafety';
import Reports from './components/reports/Reports';
import Testimonials from './components/tesimonials/Testimonials';
import useContactModal from '../contactModal/useContactModal';
import ContactModal from '../contactModal/ContactModal';

const Home: React.FC = () => {
  const {
    shouldShowContactModal,
    openContactModal,
    closeContactModal,
    contactModalRef,
  } = useContactModal();

  return (
    <Container>
      <ContactModal
        onClose={closeContactModal}
        ref={contactModalRef}
        shouldShow={shouldShowContactModal}
      />
      <Header openContactModal={openContactModal} />
      <Hero openContactModal={openContactModal} />
      <FacialRec />
      <Byod openContactModal={openContactModal} />
      <DigitalIdCards />
      <RapidSafety />
      <DataSync />
      <Testimonials openContactModal={openContactModal} />
      <Reports />
      <FinalCTA openContactModal={openContactModal} />
      <Footer />
    </Container>
  );
};

export default Home;

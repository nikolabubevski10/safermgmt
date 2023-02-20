import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import MapComponent from './components/MapComponent/MapComponent';

import {
  Container,
  Overlay,
  Modal,
  TopContainer,
  Inner,
} from './MapModalStyles';
import CloseButton from './components/closeButton/CloseButton';
import Spinner from './components/spinner/Spinner';
import { IBusRoute, IGeoCoordinates } from '../../types';
import RouteDetailCard from './components/RouteDetailCard/RouteDetailCard';

interface Props {
  isLoading?: boolean;
  shouldShow: boolean;
  closeModal: (e: React.MouseEvent) => void;
  mapData: IBusRoute;
}

const MapModal: React.FC<Props> = ({
  isLoading = false,
  shouldShow,
  closeModal,
  mapData,
}: Props) => {
  const { t } = useTranslation();
  const title = t('Route Map');

  const center = useMemo<IGeoCoordinates | null>(() => {
    const { startLocation, endLocation } = mapData.route;
    if (!mapData) return null;
    const lat = startLocation.lat + (endLocation.lat - startLocation.lat) / 2;
    const lng = startLocation.lng + (endLocation.lng - startLocation.lng) / 2;
    return { lat, lng };
  }, [mapData]);

  const shouldShowLoader = isLoading || !center;

  return (
    <Container shouldShow={shouldShow}>
      <Overlay onClick={closeModal} />
      <Modal>
        {shouldShowLoader ? (
          <Spinner />
        ) : (
          <>
            <TopContainer>
              <h2>{title}</h2>
              <CloseButton onClick={closeModal} />
            </TopContainer>
            <RouteDetailCard data={mapData} />
            <Inner>
              <MapComponent
                center={center as IGeoCoordinates}
                mapData={mapData}
              />
            </Inner>
          </>
        )}
      </Modal>
    </Container>
  );
};
export default MapModal;

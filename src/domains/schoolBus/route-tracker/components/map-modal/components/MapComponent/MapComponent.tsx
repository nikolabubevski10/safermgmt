import React, { useMemo, useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
  DirectionsService,
  Marker,
} from '@react-google-maps/api';
import Spinner from '../spinner/Spinner';
import { IBusRoute, IGeoCoordinates } from '../../../../types';
import { containerStyle } from './MapComponentStyles';
import StartMarker from '../../../../assets/pin-start.svg';
import EndMarker from '../../../../assets/pin-end.svg';
import EmergencyMarker from '../../../../assets/emergency-marker.svg';

interface IMapProps {
  center: IGeoCoordinates;
  mapData: IBusRoute;
}

const MapComponent: React.FC<IMapProps> = ({ center, mapData }: IMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  const {
    route: { startLocation, endLocation },
    emergencyLocation,
  } = mapData;

  const computeMapDirections: IMapDirectionProps[] = useMemo(() => {
    const mapDirections: IMapDirectionProps[] = [];
    mapDirections.push({
      startLocation,
      endLocation: emergencyLocation
        ? emergencyLocation.coordinates
        : endLocation,
      polyLineColor: '#009391',
    });

    if (emergencyLocation) {
      mapDirections.push({
        startLocation: emergencyLocation.coordinates,
        endLocation: endLocation,
        polyLineColor: 'rgba(0, 147, 145, 0.25)',
      });
    }
    return mapDirections;
  }, [startLocation, endLocation, emergencyLocation]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={(...args) => console.log(args)}
    >
      {computeMapDirections.map(
        (direction: IMapDirectionProps, index: number) => (
          <RenderMapDirection
            key={`${index}-map-direction`}
            startLocation={direction.startLocation}
            endLocation={direction.endLocation}
            polyLineColor={direction.polyLineColor}
          />
        ),
      )}

      <Marker position={startLocation} icon={StartMarker} />
      {!!emergencyLocation && (
        <Marker
          position={emergencyLocation?.coordinates}
          icon={EmergencyMarker}
        />
      )}

      <Marker icon={EndMarker} position={endLocation} />
    </GoogleMap>
  ) : (
    <Spinner />
  );
};

export default React.memo(MapComponent);

interface IMapDirectionProps {
  startLocation: IGeoCoordinates;
  endLocation: IGeoCoordinates;
  polyLineColor: string;
}

type IDirectionsResult = google.maps.DirectionsResult;
type IDirectionsStatus = google.maps.DirectionsStatus;

const RenderMapDirection: React.FC<IMapDirectionProps> = ({
  startLocation,
  endLocation,
  polyLineColor,
}: IMapDirectionProps) => {
  const [directions, setDirections] = useState<IDirectionsResult | null>(null);
  const handleGetDirections = (
    response: IDirectionsResult,
    status: IDirectionsStatus,
  ) => {
    if (status === 'OK') {
      setDirections(response);
    }
  };

  const { TravelMode } = google.maps;

  const directionsService = useMemo(
    () => (
      <DirectionsService
        options={{
          origin: startLocation,
          destination: endLocation,
          travelMode: TravelMode.DRIVING,
        }}
        callback={handleGetDirections}
      />
    ),
    [startLocation, endLocation],
  );

  return (
    <>
      {directionsService}
      {!!directions && (
        <DirectionsRenderer
          options={{
            directions,
            polylineOptions: { strokeColor: polyLineColor, strokeWeight: 5 },
            suppressMarkers: true,
          }}
        />
      )}
    </>
  );
};

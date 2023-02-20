import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

interface IGeoCoordinates {
  lat: number;
  lng: number;
}

const getGeoLocation = async ({
  lat,
  lng,
}: IGeoCoordinates): Promise<string> => {
  return new Promise((resolve, reject) => {
    return client
      .reverseGeocode({
        params: {
          latlng: { lat, lng },
          key: 'AIzaSyAbvp33pU1cm7sgQkUuzw2PafC_oSO4DzE',
        },
        timeout: 1000,
      })
      .then((response) => {
        return resolve(response.data.results[0].formatted_address);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export default getGeoLocation;

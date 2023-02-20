export interface IBusRoute {
  id: string;
  status: 'completed' | 'emergency';
  bus: IBus;
  busDriver: IBusDriver;
  startTime: string;
  endTime: string;
  totalTime: string;
  emergencyLocation?: IEmergencyLocation;
  route: IRoute;
}

interface IBusDriver {
  id: string;
}

interface IBus {
  number: string;
}

export interface IGeoCoordinates {
  lat: number;
  lng: number;
}
export interface IRoute {
  startLocation: IGeoCoordinates;
  startLocationAddress: string;
  endLocation: IGeoCoordinates;
  endLocationAddress: string;
}

interface IEmergencyLocation {
  coordinates: IGeoCoordinates;
  locationAddress: string;
}

export enum FilterType {
  Negative = 'negative',
  Positive = 'positive',
  Nutral = 'neutral',
}

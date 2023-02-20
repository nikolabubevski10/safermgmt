export interface IBusAttendance {
  name: string;
  id: string;
  boarding: string;
  location: string;
  busNumber: string;
}

export interface IBusRouteLocations {
  eventDate: string;
  id: string;
  latitude: number;
  longitude: number;
  busRoute: IBusRoute;
  person: IPerson;
}

export interface IBusRoute {
  bus: IBus;
}

export interface IBus {
  id: string;
  number: string;
}

export interface IPerson {
  id: string;
  organizationPerson: IOrganizationPerson;
}

export interface IOrganizationPerson {
  id: number;
  firstName: string;
  lastName: string;
}

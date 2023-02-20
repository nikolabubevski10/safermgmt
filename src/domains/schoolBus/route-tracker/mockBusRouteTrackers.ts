import { IBusRoute } from './types';

const busRoutes: IBusRoute[] = [
  {
    id: '224708',
    status: 'completed',
    bus: {
      number: 'AB-1234',
    },
    busDriver: {
      id: '746952',
    },
    startTime: '11:22 PM',
    endTime: '12:22 PM',
    totalTime: '1 hr',
    route: {
      startLocation: { lat: 32.986998404394825, lng: -96.61410078985146 },
      startLocationAddress: '3891 Ranchview Dr. Richardson, CA 62639',
      endLocation: { lat: 33.00048248264063, lng: -96.61970455308024 },
      endLocationAddress: '19211 Dodge Ave, CA 92705',
    },
  },
  {
    id: '528625',
    status: 'emergency',
    bus: {
      number: '1ABC234',
    },
    busDriver: {
      id: '234524',
    },
    startTime: '11:00 PM',
    endTime: '12:10 PM',
    totalTime: '1 hr 10 min',
    route: {
      startLocation: { lat: 32.986998404394825, lng: -96.61410078985146 },
      startLocationAddress: '3891 Ranchview Dr. Richardson, CA 62639',
      endLocation: { lat: 33.00048248264063, lng: -96.61970455308024 },
      endLocationAddress: '19211 Dodge Ave, CA 92705',
    },
    emergencyLocation: {
      coordinates: { lat: 32.993963, lng: -96.61287 },
      locationAddress: 'R-6402-000-0320-1, Murphy, TX 75094',
    },
  },
  {
    id: '546456',
    status: 'completed',
    bus: {
      number: 'AD-2672',
    },
    busDriver: {
      id: '345645',
    },
    startTime: '8:10 PM',
    endTime: '8:30 PM',
    totalTime: '20 min',
    route: {
      startLocation: { lat: 32.986998404394825, lng: -96.61410078985146 },
      startLocationAddress: '3891 Ranchview Dr. Richardson, CA 62639',
      endLocation: { lat: 33.00048248264063, lng: -96.61970455308024 },
      endLocationAddress: '19211 Dodge Ave, CA 92705',
    },
  },
  {
    id: '345634',
    status: 'emergency',
    bus: {
      number: '346345',
    },
    busDriver: {
      id: '457546',
    },
    startTime: '1:20 PM',
    endTime: '2:40 PM',
    totalTime: '1 hr 20 min',
    route: {
      startLocation: { lat: 32.986998404394825, lng: -96.61410078985146 },
      startLocationAddress: '3891 Ranchview Dr. Richardson, CA 62639',
      endLocation: { lat: 33.00048248264063, lng: -96.61970455308024 },
      endLocationAddress: '19211 Dodge Ave, CA 92705',
    },
    emergencyLocation: {
      coordinates: { lat: 32.993963, lng: -96.61287 },
      locationAddress: 'R-6402-000-0320-1, Murphy, TX 75094',
    },
  },
  {
    id: '345634',
    status: 'completed',
    bus: {
      number: '456457',
    },
    busDriver: {
      id: '345634',
    },
    startTime: '10:00 PM',
    endTime: '12:00 PM',
    totalTime: '2 hr',
    route: {
      startLocation: { lat: 32.986998404394825, lng: -96.61410078985146 },
      startLocationAddress: '3891 Ranchview Dr. Richardson, CA 62639',
      endLocation: { lat: 33.00048248264063, lng: -96.61970455308024 },
      endLocationAddress: '19211 Dodge Ave, CA 92705',
    },
  },
];

export default busRoutes;

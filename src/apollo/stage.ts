const hostname = window.location.hostname;

export const IS_STAGE = {
  development: process.env.NODE_ENV === 'development',
  local: hostname.includes('localhost'),
  dev: hostname.includes('dev'),
  staging: hostname.includes('stage'),
  production:
    !hostname.includes('dev') &&
    !hostname.includes('stage') &&
    hostname.includes('safermgmt'),
};

export const HOSTS = {
  development: '10lssp066a.execute-api.us-east-1.amazonaws.com',
  local: '10lssp066a.execute-api.us-east-1.amazonaws.com',
  dev: '10lssp066a.execute-api.us-east-1.amazonaws.com',
  staging: '10lssp066a.execute-api.us-east-1.amazonaws.com',
  production: '10lssp066a.execute-api.us-east-1.amazonaws.com',
};

export const WS_HOSTS = {
  development: '10lssp066a.execute-api.us-east-1.amazonaws.com',
  local: '10lssp066a.execute-api.us-east-1.amazonaws.com',
  dev: '10lssp066a.execute-api.us-east-1.amazonaws.com',
  staging: '10lssp066a.execute-api.us-east-1.amazonaws.com',
  production: '10lssp066a.execute-api.us-east-1.amazonaws.com',
};

export const PROTOCOL = 'https';
export const WS_PROTOCOL = 'wss';

const hostIndex = Math.min(
  Object.values(IS_STAGE).findIndex((isStage) => isStage),
);
export const ENVIRONMENT_NAME = Object.keys(HOSTS)[hostIndex];
export const HOST = Object.values(HOSTS)[hostIndex];
export const WS_HOST = Object.values(WS_HOSTS)[hostIndex];

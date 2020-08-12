import {resolve} from 'path';

export const SERVER_PORT = 2222;
export const HOST = 'localhost';
export const BASE_URL = `https://${HOST}:${SERVER_PORT}`;
export const MOCKING_BASE_ENDPOINT = '/ngapimock';
export const MOCKFILES_PATH = resolve(process.cwd(), './api');
export const MOCKING_URL = '/';
export const HEADERS = {
  headers: {
    'Content-Type': 'application.json',
  },
};

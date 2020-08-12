import fetch from 'node-fetch';
import {
  BASE_URL,
  DEFAULT_DELAY,
  HEADERS,
  MOCKING_BASE_ENDPOINT,
} from './constants';

export default class api {
  static async getAllMocks() {
    return this.execute(
      'GET',
      '/mocks',
      undefined,
      'could not retrieve all the mocks',
    );
  }

  static async execute(httpMethod, urlSuffix, options, errorMessage) {
    const data = {
      ...HEADERS,
      method: httpMethod,
    };
    if (options !== undefined) {
      data.body = JSON.stringify(options);
    }
    return this.handleRequest(urlSuffix, data, errorMessage);
  }

  static async handleRequest(urlsuffix, data, errorMessage) {
    const response = await fetch(
      BASE_URL + MOCKING_BASE_ENDPOINT + urlsuffix,
      data,
    );
    if (response.status !== 200) {
      throw new Error(errorMessage);
    }
    return response;
  }
}

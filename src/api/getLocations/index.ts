import {LOCATIONS_URL} from '../constants';
import {request} from '../request';

export const getLocations = async () => {
  return await request.get(LOCATIONS_URL);
};

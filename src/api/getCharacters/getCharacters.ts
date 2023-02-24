import {CHARACTERS_URL} from '../constants';
import {request} from '../request';

export const getCharacters = () => {
  return request.get(CHARACTERS_URL);
};

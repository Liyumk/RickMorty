import {CHARACTERS_URL} from '../constants';
import {request} from '../request';

export const getCharacters = async () => {
  return await request.get(CHARACTERS_URL);
};

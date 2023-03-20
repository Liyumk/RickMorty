import {CHARACTERS_URL} from '../constants';
import {request} from '../request';

export const getCharacters = async () => {
  const res = await request.get(CHARACTERS_URL);
  return res.data;
};

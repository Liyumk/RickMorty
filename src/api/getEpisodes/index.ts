import {EPISODES_URL} from '../constants';
import {request} from '../request';

export const getEpisodes = async () => {
  return await request.get(EPISODES_URL);
};

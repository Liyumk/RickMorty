import {useQuery} from 'react-query';
import {getEpisodes} from '../../../api/getEpisodes';

export const useEpisodes = () => {
  return useQuery('getEpisodes', getEpisodes);
};

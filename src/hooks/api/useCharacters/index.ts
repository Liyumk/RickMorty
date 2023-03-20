import {useQuery} from 'react-query';
import {getCharacters} from '../../../api/getCharacters';

export const useCharacters = () => {
  return useQuery('getCharacters', getCharacters);
};

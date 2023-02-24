import {useQuery} from 'react-query';
import {getCharacters} from '../../../api/getCharacters/getCharacters';

export const useCharacters = () => {
  return useQuery('getCharacters', getCharacters);
};

import {useQuery} from 'react-query';
import {getLocations} from '../../../api/getLocations';

export const useLocations = () => {
  return useQuery('getLocations', getLocations);
};

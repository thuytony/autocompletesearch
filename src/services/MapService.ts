import {ApiProvider} from './ApiProvider';
import {
  ENDPOINT_SEARCH_LOCATION,
  ENDPOINT_GET_PLACE_DETAIL,
} from './ConfigEnpoints'

class MapService extends ApiProvider {
  constructor() {
    super();
  }

  searchLocation = async (textSearch: string) => {
    const data = await this.get(ENDPOINT_SEARCH_LOCATION.replace('${searchTerm}', textSearch))
    return data
  }

  getPlaceDetail = async (placeId: string) => {
    const data = await this.get(ENDPOINT_GET_PLACE_DETAIL.replace('${placeId}', placeId))
    return data
  }
}

const mapService = new MapService();
export default mapService;

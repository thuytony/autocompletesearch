import { ApiConfig } from "@constants";


export const ENDPOINT_SEARCH_LOCATION = 'autocomplete/json?input=${searchTerm}&key=' + `${ApiConfig.GOOGLE_MAP_API_KEY}`
export const ENDPOINT_GET_PLACE_DETAIL = 'details/json?place_id=${placeId}&key=' + `${ApiConfig.GOOGLE_MAP_API_KEY}`
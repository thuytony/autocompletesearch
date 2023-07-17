export interface Place {
    name: string
    lat: number
    lng: number
};

export interface LocationResponse {
    predictions: Prediction[]
}

export interface Prediction {
    place_id: string;
}

export interface AutocompleteResult {
    name: string;
    lat: number;
    lng: number;
  }
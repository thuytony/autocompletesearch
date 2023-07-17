import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { Prediction, AutocompleteResult, LocationResponse } from '@models';
import { doSearchLocation, searchLocationSuccess, searchLocationFailed } from '../reducers/mapLocation';
import mapService from '../../services/MapService';

function* doSearchLocationSaga({ payload, type }: PayloadAction<string>) {
    try {
        const autocompleteResponse: AxiosResponse<LocationResponse> = yield call(mapService.searchLocation, payload)
        const placeIds = autocompleteResponse.data.predictions.map(
            (prediction: Prediction) => prediction.place_id
        );

        // As google docs describe only return 5 results max.
        // So it doesn't take a lot of resources to do the simultaneous implementation of getting detailed location data and displaying it on the map.
        const placeDetailsPromises = placeIds.map((placeId: string) =>
            call(mapService.getPlaceDetail, placeId)
        );
        const placeDetailsResponses = yield all(placeDetailsPromises);
        const results: AutocompleteResult[] = placeDetailsResponses.map(
            (response) => {
                const place = response.data.result;
                return {
                    name: place.name,
                    lat: place.geometry.location.lat,
                    lng: place.geometry.location.lng,
                };
            }
        );

        if (results) {
            yield put(searchLocationSuccess({isSuccess: true, data: results}))
        } else {
            yield put(searchLocationFailed({isSuccess: false}))
        }
    } catch (error) {
        yield put(searchLocationFailed({isSuccess: false}))
    }
}

export default function* mapLocationSaga() {
    yield takeLatest(doSearchLocation.type, doSearchLocationSaga);
}

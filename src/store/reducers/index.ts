import { combineReducers } from 'redux';
import mapLocationReducer, { MapLocationState } from './mapLocation';

export interface RootState {
    mapLocation: MapLocationState,
}

const rootReducer = combineReducers<RootState>({
    mapLocation: mapLocationReducer,
});

export default rootReducer;

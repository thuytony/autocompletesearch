import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AutocompleteResult } from '@models';

export interface MapLocationState {
  autocomplete: AutocompleteResult[];
  isLoadingAutoComplete: boolean;
}

export interface SearchLocationResponsePayload {
  data?: AutocompleteResult[],
  isSuccess: boolean,
}

const initialState: MapLocationState = {
  autocomplete: [],
  isLoadingAutoComplete: false,
};

const mapLocationSlice = createSlice({
  name: 'mapLocation',
  initialState,
  reducers: {
    doSearchLocation: (state, action: PayloadAction<string>) => {
      state.isLoadingAutoComplete = true
    },
    searchLocationSuccess: (state, action: PayloadAction<SearchLocationResponsePayload>) => {
      state.autocomplete = action.payload.data!
      state.isLoadingAutoComplete = false
    },
    searchLocationFailed: (state, action: PayloadAction<SearchLocationResponsePayload>) => {
      state.autocomplete = []
      state.isLoadingAutoComplete = false
    },
  },
});

export const { doSearchLocation, searchLocationSuccess, searchLocationFailed } = mapLocationSlice.actions;
export default mapLocationSlice.reducer;

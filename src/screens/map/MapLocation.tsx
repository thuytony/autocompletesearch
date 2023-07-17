import React, { useState, useRef } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { Marker, LatLng, Region } from 'react-native-maps';
import { InputSearch, IconImageButton } from '@components';
import * as icons from '@assets';
import { Dimension } from '@theme';
import { Place } from '@models';
import { RootState } from '..../../src/store/reducers';
import { SearchResult } from './SearchResult';
import { doSearchLocation } from '../../../src/store/reducers/mapLocation';

const MapLocation = () => {
  const mapRef = useRef<MapView>(null);
  const timeOutSearchRef = useRef<null | ReturnType<typeof setTimeout>>(null);
  
  const dispatch = useDispatch();
  const mapLocationReducer = useSelector((state: RootState) => state.mapLocation);
  const autocompleteResults = mapLocationReducer.autocomplete;
  const isLoadingAutoComplete = mapLocationReducer.isLoadingAutoComplete;

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPlace, setCurrentPlace] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onChangeTextSearch = (text: string) => {
    if (!text) {
      setSearchTerm(text);
      return;
    }

    // Automatically request after user finishes typing 1.5s
    if (timeOutSearchRef.current) clearTimeout(timeOutSearchRef.current);
    setSearchTerm(text);
    timeOutSearchRef.current = setTimeout(()=>{
      dispatch(doSearchLocation(text))
    }, 1500);
  }

  const handleResultSelection = (place: Place) => {
    setIsModalVisible(false);
    setCurrentPlace(place.name);
    const location: LatLng = {
      latitude: place.lat,
      longitude: place.lng,
    };
    const region: Region = {
      ...location,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    // Move the map to the selected marker and zoom in
    mapRef.current?.animateToRegion(region, 1000);
  };

  const onPressBackToMap = () => {
    setIsModalVisible(false);
  }

  const _renderModalSearch = () => {
    return (
      <Modal visible={isModalVisible}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.viewSearchModal}>
            <InputSearch
              placeholder="Search here"
              value={searchTerm}
              onChangeText={onChangeTextSearch}
              leftComponent={<IconImageButton source={icons.icBack} onPress={onPressBackToMap} />}
              onClearText={() => onChangeTextSearch('')}
              loading={isLoadingAutoComplete}
              isShowRight={true}
            />
          </View>
          {autocompleteResults.map((place: Place, index: number) => (
            <SearchResult
              key={index}
              onPress={() => handleResultSelection(place)}
              title={place.name}
            />
          ))}
        </SafeAreaView>
      </Modal>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          ref={mapRef}
        >
          {autocompleteResults.map((place: Place, index: number) => (
            <Marker
              key={index}
              coordinate={{
                latitude: place.lat,
                longitude: place.lng,
              }}
              title={place.name}
              onPress={() => handleResultSelection(place)}
            />
          ))}
        </MapView>
      </View>
      
      <View style={styles.viewSearch}>
        <InputSearch
          placeholder="Search here"
          value={currentPlace}
          onChangeText={(text) => setSearchTerm(text)}
          leftComponent={<IconImageButton source={icons.icMap} />}
          editable={false}
        />
        <TouchableOpacity
          style={styles.maskInputSearch}
          onPress={() => setIsModalVisible(true)}
        />
      </View>

      {_renderModalSearch()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  viewSearch: {
    position: 'absolute',
    left: Dimension.margin.base,
    right: Dimension.margin.base,
    top: Dimension.margin.base,
  },
  maskInputSearch: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  modalContainer: {
    flex: 1,
  },
  viewSearchModal: {
    margin: Dimension.margin.base,
  },
});


export default MapLocation;
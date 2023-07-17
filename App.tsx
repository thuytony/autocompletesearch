import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as ProviderAntDesign } from '@ant-design/react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import MapLocation from './src/screens/map/MapLocation'; 

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <ProviderAntDesign>
                <SafeAreaView style={styles.container}>
                    <MapLocation />
                </SafeAreaView>
            </ProviderAntDesign>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default App;

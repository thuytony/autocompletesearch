import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { BText } from '@components';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <BText>Testing the text</BText>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default App;

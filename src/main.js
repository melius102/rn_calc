import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';

import DisplayContainer from './components/display-container';
import KeyPadContainer from './components/key-pad-container';

const store = createStore(reducer);

export default function Main() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                {/* <View style={styles.statusBar}></View> */}
                <View style={styles.header}>
                    <Text style={styles.title}>Calculator ᴿᴺ</Text>
                </View>
                <DisplayContainer />
                <KeyPadContainer />
            </View>
        </Provider>
    );
}

// 360 x 640
// 360 x 56     header
// 360 x 140    resultView
// 360 x 420 = (86 * 4 + 16 ) x (72 * 5 + 60)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },

    statusBar: {
        height: 24, // 24 LG ok
        backgroundColor: '#E58D52'
    },

    header: {
        height: 56,
        // borderWidth: 1,
        backgroundColor: '#404040',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: '#FFFFFFB3',
        fontWeight: 'bold',
        fontSize: 20
    }
});

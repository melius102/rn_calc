import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeyPad from './key-pad';

export default function KeyPadContainer() {
    return (
        <View style={styles.keyPadContainer}>
            <KeyPad />
            <View style={styles.keyDrawer}></View>
        </View>
    );
}

// 360 x 640
// 360 x 56     header
// 360 x 140    resultView
// 360 x 420 = (86 * 4 + 16 ) x (72 * 5 + 60)

const styles = StyleSheet.create({
    keyPadContainer: {
        flex: 420,
        flexDirection: 'row'
    },

    keyDrawer: {
        flex: 16,
        backgroundColor: '#AAAAAA'
    }
});

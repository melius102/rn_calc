import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Key from './key';
import { clog } from '../util';

export default function KeyPad({ style, kList, firstKey }) {
    return (
        <View style={[styles.keyRowContainer, { flex: style.height }]}>
            <Key kItem={kList[0]} firstKey={firstKey ? firstKey : null} />
            <Key kItem={kList[1]} />
            <Key kItem={kList[2]} />
            <Key kItem={kList[3]} lastKey={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    keyRowContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#404040'
    }
});

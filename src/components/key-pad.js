import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import KeyRow from './key-row';

const key = { color: '#FFFFFFB3', fontSize: 24, fontWeight: "bold" };

const kList = [
    // 0
    { name: 'MC', cpnt: <Text style={key}>{'MC'}</Text> },
    { name: 'M-', cpnt: <Text style={key}>{'M-'}</Text> },
    { name: 'M+', cpnt: <Text style={key}>{'M+'}</Text> },
    { name: 'MR', cpnt: <Text style={key}>{'MR'}</Text> },

    // 4
    { name: 'AC', cpnt: <Text style={key}>{'AC'}</Text> },
    { name: 'CE', cpnt: <Text style={key}>{'CE'}</Text> },
    // { name: 'DEL', cpnt: <MaterialCommunityIcons name="play" size={key.fontSize} color={key.color} /> }, // del
    // { name: 'PCT', cpnt: <MaterialCommunityIcons name="percent" size={key.fontSize} color={key.color} /> }, // percent
    { name: 'DL', cpnt: <Text style={key}>{'▶'}</Text> }, // del
    { name: '%', cpnt: <Text style={key}>{'%'}</Text> }, // percent

    // 8
    { name: '7', cpnt: <Text style={key}>{'7'}</Text> },
    { name: '8', cpnt: <Text style={key}>{'8'}</Text> },
    { name: '9', cpnt: <Text style={key}>{'9'}</Text> },
    // { name: 'DIV', cpnt: <MaterialCommunityIcons name="division" size={key.fontSize} color={key.color} /> }, // division
    { name: '÷', cpnt: <Text style={key}>{'÷'}</Text> }, // division

    // 12
    { name: '4', cpnt: <Text style={key}>{'4'}</Text> },
    { name: '5', cpnt: <Text style={key}>{'5'}</Text> },
    { name: '6', cpnt: <Text style={key}>{'6'}</Text> },
    // { name: 'MUL', cpnt: <Entypo name="cross" size={key.fontSize} color={key.color} /> }, // multiply
    { name: '×', cpnt: <Text style={key}>{'×'}</Text> }, // multiply

    // 16
    { name: '1', cpnt: <Text style={key}>{'1'}</Text> },
    { name: '2', cpnt: <Text style={key}>{'2'}</Text> },
    { name: '3', cpnt: <Text style={key}>{'3'}</Text> },
    // { name: 'MNS', cpnt: <Entypo name="minus" size={key.fontSize} color={key.color} /> }, // minus
    { name: '-', cpnt: <Text style={key}>{'-'}</Text> }, // minus

    // 20
    { name: '0', cpnt: <Text style={key}>{'0'}</Text> },
    { name: '.', cpnt: <Text style={key}>{'.'}</Text> },
    // { name: 'EQL', cpnt: <MaterialCommunityIcons name="equal" size={key.fontSize} color={key.color} /> }, // equal
    // { name: 'PLS', cpnt: <Entypo name="plus" size={key.fontSize} color={key.color} /> }, // plus
    { name: '=', cpnt: <Text style={key}>{'='}</Text> }, // equal
    { name: '+', cpnt: <Text style={key}>{'+'}</Text> }, // plus
];

export default function KeyPad() {
    return (
        <View style={styles.keyPad}>
            <KeyRow style={{ height: 60 }} kList={[kList[0], kList[1], kList[2], kList[3]]} />
            <KeyRow style={{ height: 72 }} kList={[kList[4], kList[5], kList[6], kList[7]]} firstKey={true} />
            <KeyRow style={{ height: 72 }} kList={[kList[8], kList[9], kList[10], kList[11]]} />
            <KeyRow style={{ height: 72 }} kList={[kList[12], kList[13], kList[14], kList[15]]} />
            <KeyRow style={{ height: 72 }} kList={[kList[16], kList[17], kList[18], kList[19]]} />
            <KeyRow style={{ height: 72 }} kList={[kList[20], kList[21], kList[22], kList[23]]} />
        </View>
    );
}

// 360 x 640
// 360 x 56     header
// 360 x 140    resultView
// 360 x 420 = (86 * 4 + 16 ) x (72 * 5 + 60)


const styles = StyleSheet.create({
    keyPad: {
        flex: 344
    }
});

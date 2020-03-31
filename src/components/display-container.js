import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { clog } from '../util';

function DisplayContainer(props) {
    return (
        <View style={styles.resultView}>
            <Text>Memory</Text>
            <Text style={styles.mainView}>{props.result}</Text>
            <Text>Radian</Text>
        </View>
    );
}

// 360 x 640
// 360 x 56     header
// 360 x 140    resultView
// 360 x 420 = (86 * 4 + 16 ) x (72 * 5 + 60)

const styles = StyleSheet.create({
    resultView: {
        flex: 140,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
    },

    mainView: {
        alignSelf: 'flex-end',
        fontSize: 24,
        marginRight: 10
    }
});

// redux connet
export default connect(
    (state) => ({ // mapStateToProps
        result: state.result
    }) // mapDispatchToProps
)(DisplayContainer);
import React, { Fragment, Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../actions';
import { clog } from '../util';

class Key extends Component {
    render() {
        let { kItem, lastKey, firstKey } = this.props;
        let underlayColor;
        if (lastKey) {
            underlayColor = '#DDA885';
        } else if (firstKey) {
            underlayColor = '#D15757';
        } else {
            underlayColor = '#747474';
        }

        return (
            <TouchableHighlight style={[
                styles.key,
                firstKey ? styles.firstKey : null,
                lastKey ? styles.lastKey : null
            ]} underlayColor={underlayColor} onPress={() => {
                this.props.dpAddChar(kItem.name);
            }}>
                {kItem.cpnt}
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    key: {
        flex: 1,
        backgroundColor: '#404040',
        borderColor: '#00000020',
        borderWidth: 0.2,
        // borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    firstKey: {
        backgroundColor: '#AF4343',
        borderColor: '#863333',
    },

    lastKey: {
        backgroundColor: '#E58D52',
        borderColor: '#D16722',
    }
});

// redux connet
export default connect(
    (state) => ({ // mapStateToProps
        result: state.result
    }), { // mapDispatchToProps
    dpAddChar: (char) => actions.addChar(char)
})(Key);
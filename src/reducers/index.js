import { types } from '../actions';
import {
    clog, makeNumber, makeResult, clearItemArr, calculate
} from '../util';

const initialState = {
    itemArr: ['0', '', ''],
    result: ''
}

const reducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case types.ADD_CHAR:
            addCharacter(newState.itemArr, action.char);
            break;
        default:
            break;
    }

    newState.result = makeResult(newState.itemArr);
    return newState;
}

// item list
// 'MC' 'M-' 'M+' 'MR'
// 'AC' 'CE' 'DL' '%'
// '7'  '8'  '9'  '÷'
// '4'  '5'  '6'  '×'
// '1'  '2'  '3'  '-'
// '0'  '.'  '='  '+'

function addCharacter(itemArr, char) {
    clog('char', char, itemArr);
    if (/\d{1}/.test(char) || char == '.') { // number or '.'
        if (itemArr[1]) itemArr[2] = makeNumber(itemArr[2], char);
        else itemArr[0] = makeNumber(itemArr[0], char);
    }
    else { // not number
        if (char == 'AC') {
            clearItemArr(itemArr);
        } else if (char == '=') {
            calculate(itemArr);
        } else if (char == '÷') {
            itemArr[1] = '÷';
        } else if (char == '×') {
            itemArr[1] = '×';
        } else if (char == '-') {
            itemArr[1] = '-';
        } else if (char == '+') {
            itemArr[1] = '+';
        }
    }
}

export default reducer;
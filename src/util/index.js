const clog = console.log;

function makeNumber(item, char) {
    if (char == '.') {
        if (!item.includes('.')) item += char;
    } else if (char == '0') {
        if (item != '0') item += char;
    } else {
        if (item == '0') item = char;
        else item += char;
    }
    return item;
}

function makeResult(itemArr) {
    let result = itemArr[0];
    if (itemArr[1]) result += ' ' + itemArr[1];
    if (itemArr[2]) result += ' ' + itemArr[2];
    return result;
}

function clearItemArr(itemArr) {
    itemArr[0] = '0';
    itemArr[1] = '';
    itemArr[2] = '';
}

function calculate(itemArr) {
    let item = '0';
    if (itemArr[2]) {
        item = calc(itemArr[0], itemArr[1], itemArr[2]);
    } else if (itemArr[1]) {
        item = calc(itemArr[0], itemArr[1], itemArr[0]);
    } else {
        item = itemArr[0];
    }
    clearItemArr(itemArr);
    itemArr[0] = item;
}

function calc(item1, op, item2) {
    let res;
    if (op == '÷') {
        res = Number(item1) / Number(item2);
    } else if (op == '×') {
        res = Number(item1) * Number(item2);
    } else if (op == '-') {
        res = Number(item1) - Number(item2);
    } else { // if (op == '+')
        res = Number(item1) + Number(item2);
    }
    return res.toString();
}

export { clog, makeNumber, makeResult, clearItemArr, calculate };
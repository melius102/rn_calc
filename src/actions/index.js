// types
const ADD_CHAR = 'ADD_CHAR';

// actions
const addChar = (char) => ({
    type: ADD_CHAR,
    char
});

export const types = {
    ADD_CHAR
};

export const actions = {
    addChar
};

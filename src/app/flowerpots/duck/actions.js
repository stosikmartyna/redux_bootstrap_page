import types from './types';

const add = item => ({
    type: types.ADD_FLOWERPOT, item
})

const reset = item => ({
    type: types.RESET_FLOWERPOTS, item
})

export default {
    add,
    reset
}
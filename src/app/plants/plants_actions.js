import types from './plants_types';

const add = item => ({
    type: types.ADD_PLANT, item
})

const reset = item => ({
    type: types.RESET_PLANTS, item
})

export default {
    add,
    reset
}
import types from './plants_types';

export const add = item => ({
    type: types.ADD_PLANT, item
})

export const reset = item => ({
    type: types.RESET_PLANTS, item
})

export default {
    add,
    reset
}
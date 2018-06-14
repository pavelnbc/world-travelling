import { IMPORT_ADVANTAGES } from '../actions';

export const advantagesReducer = (state = [], action) => {
    switch (action.type) {
        case IMPORT_ADVANTAGES:
            return action.advantages;

        default:
            return state
    }
};
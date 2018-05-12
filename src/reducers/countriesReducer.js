import { IMPORT_COUNTRIES } from '../actions';

const countriesReducer = (state = [], action) => {
    switch(action.type) {
        case IMPORT_COUNTRIES:
            return action.countries;

        default:
            return state
    }
};

export default countriesReducer
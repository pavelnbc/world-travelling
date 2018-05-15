import { IMPORT_COUNTRIES, IMPORT_DIRECTIONS } from '../actions';

export const countriesReducer = (state = [], action) => {
    switch(action.type) {
        case IMPORT_COUNTRIES:
            return action.countries;

        default:
            return state
    }
};

export const directionsReducer = (state = [], action) => {
    switch (action.type) {
        case IMPORT_DIRECTIONS:
            return action.directions

        default:
            return state
    }
}
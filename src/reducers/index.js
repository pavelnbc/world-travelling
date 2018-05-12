import mobileMenuReducer from './mobileMenuReduser';
import countriesReducer from './countriesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    isMobileMenuOpened: mobileMenuReducer,
    countries: countriesReducer
})



/*
let reducer = (state = {}, action) => {
    return {
        isMobileMenuOpened: mobileMenuReducer(state.isMobileMenuOpened, action)
    }
};

export default reducer*/

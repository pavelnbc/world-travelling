import mobileMenuReducer from './mobileMenuReduser';
import { countriesReducer, directionsReducer} from './countriesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    isMobileMenuOpened: mobileMenuReducer,
    countries: countriesReducer,
    directions: directionsReducer
})



/*
let reducer = (state = {}, action) => {
    return {
        isMobileMenuOpened: mobileMenuReducer(state.isMobileMenuOpened, action)
    }
};

export default reducer*/

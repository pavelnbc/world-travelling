import mobileMenuReducer from './mobileMenuReduser';
import { combineReducers } from 'redux';

export default combineReducers({
    isMobileMenuOpened: mobileMenuReducer
})



/*
let reducer = (state = {}, action) => {
    return {
        isMobileMenuOpened: mobileMenuReducer(state.isMobileMenuOpened, action)
    }
};

export default reducer*/

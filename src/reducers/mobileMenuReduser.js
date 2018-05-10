import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from '../actions';

const mobileMenuReducer = (state = false, action) => {
      switch(action.type) {
          case OPEN_MOBILE_MENU:
              return true;

          case CLOSE_MOBILE_MENU:
              return false;

          default:
              return state
      }
};

export default mobileMenuReducer
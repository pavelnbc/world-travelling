import { IMPORT_HEADER_lINKS } from '../actions';

export const headerLinksReducer = (state = [], action) => {
    switch(action.type) {
        case IMPORT_HEADER_lINKS:
            return action.headerLinks;

        default:
            return state
    }
};
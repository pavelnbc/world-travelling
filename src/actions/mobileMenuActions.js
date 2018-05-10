export const OPEN_MOBILE_MENU = 'MOBILE_MENU_OPENED';
export const CLOSE_MOBILE_MENU = 'MOBILE_MENU_CLOSED';

export const setMobileMenuOpened = () => {
    return {
        type: OPEN_MOBILE_MENU
    }
};

export const setMobileMenuClosed = () => {
    return {
        type: CLOSE_MOBILE_MENU
    }
};
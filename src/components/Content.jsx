import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setMobileMenuClosed } from '../actions'

function ContentComponent({ children, setMobileMenuClosed }) {
    let closeMobileMenu = (event) => {
      if(event.target.closest('#header__mobile-menu-icon')) {
         return
      }

      setMobileMenuClosed();
    };

    return (
        <div className="content" onClick={closeMobileMenu}>
            {children}
        </div>
    )
}

ContentComponent.propTypes = {
    setMobileMenuClosed: PropTypes.func
};

let mapDispatchToProps = (dispatch) => {
    return {
        setMobileMenuClosed: () => dispatch(setMobileMenuClosed())
    }
};

const Content = connect(null, mapDispatchToProps)(ContentComponent);

export default Content
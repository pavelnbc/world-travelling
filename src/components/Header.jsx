import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { importHeaderLinks, setMobileMenuOpened } from '../actions';

class HeaderComponent extends Component {
    componentWillMount() {
        this.props.importHeaderLinks();
    }

    render() {
        let { headerLinks, isMobileMenuOpened, setMobileMenuOpened } = this.props;

        let mobileMenuClass = classNames({
            'mobile-menu': true,
            'folded': isMobileMenuOpened
        });

        let onTopPage = () => {
            document.documentElement.scrollTop = 0;
        };

        return (
            <header className="header" id="header">
                <div className="grid">
                    <div className="row">
                        <div className="col-xs-12 smHidden mdHidden lgHidden">
                            <div className="header__mobile">
                                <div className="header__menu-icon" id="header__mobile-menu-icon" onClick={setMobileMenuOpened}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <h2 className="header__title" onClick={onTopPage}>
                                    <NavLink to="/">
                                        World Traveling
                                    </NavLink>
                                </h2>
                                <div className={mobileMenuClass}>
                                    <ul className="mobile-menu__list" onClick={onTopPage}>
                                        {headerLinks.map((link, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink to={link.linkPath}>
                                                        <FontAwesome name={link.linkIcon}/>
                                                        {link.name}
                                                    </NavLink>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xsHidden col-sm-12 col-md-12 col-lg-12">
                            <ul className="header__list" onClick={onTopPage}>
                                {headerLinks.map((link, index) => {
                                    return (
                                        <li key={index}>
                                            {link.name}
                                            <NavLink exact to={link.linkPath}></NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

HeaderComponent.propTypes = {
    isMobileMenuOpened: PropTypes.bool,
    headerLinks: PropTypes.array,
    importHeaderLinks: PropTypes.func,
    setMobileMenuOpened: PropTypes.func
};

let mapStateToProps = (state) => {
    return {
        headerLinks: state.headerLinks,
        isMobileMenuOpened: state.isMobileMenuOpened
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        importHeaderLinks: () => dispatch(importHeaderLinks()),
        setMobileMenuOpened: () => dispatch(setMobileMenuOpened())
    }
};

const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));

export default Header
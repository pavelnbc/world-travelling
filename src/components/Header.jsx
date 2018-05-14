import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setMobileMenuOpened } from '../actions';

function HeaderComponent({ isMobileMenuOpened, setMobileMenuOpened }) {
    let mobileMenuClass = classNames({
        'mobile-menu': true,
        'folded': isMobileMenuOpened
    });

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
                            <h2 className="header__title">
                                <NavLink to="/">
                                    World Traveling
                                </NavLink>
                            </h2>
                            <div className={mobileMenuClass}>
                                <ul className="mobile-menu__list">
                                    <li>
                                        <FontAwesome name="home"/>
                                        <NavLink to="/">Main</NavLink>
                                    </li>
                                    <li>
                                        <FontAwesome name="wrench"/>
                                        <NavLink to="/services">Services</NavLink>
                                    </li>
                                    <li>
                                        <FontAwesome name="globe"/>
                                        <NavLink to="/countries">Visited Countries</NavLink>
                                    </li>
                                    <li>
                                        <FontAwesome name="briefcase"/>
                                        <NavLink to="/vacancies">Vacancies</NavLink>
                                    </li>
                                    <li>
                                        <FontAwesome name="question"/>
                                        <NavLink to="/about">About Us</NavLink>
                                    </li>
                                    <li>
                                        <FontAwesome name="phone"/>
                                        <NavLink to="/contacts">Contacts</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xsHidden col-sm-12 col-md-12 col-lg-12">
                        <ul className="header__list">
                            <li>
                                Main
                                <Link exact="true" to="/"></Link>
                            </li>
                            <li>
                                Services
                                <NavLink to="/services"></NavLink>
                            </li>
                            <li>
                                Visited Countries
                                <NavLink to="/countries"></NavLink>
                            </li>
                            <li>
                                Vacancies
                                <NavLink to="/vacancies"></NavLink>
                            </li>
                            <li>
                                About Us
                                <NavLink to="/about"></NavLink>
                            </li>
                            <li>
                                Contacts
                                <NavLink to="/contacts"></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

HeaderComponent.propTypes = {
    isMobileMenuOpened: PropTypes.bool,
    setMobileMenuOpened: PropTypes.func
};

let mapStateToProps = (state) => {
    return {
        isMobileMenuOpened: state.isMobileMenuOpened
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setMobileMenuOpened: () => dispatch(setMobileMenuOpened())
    }
};

const Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent));

export default Header
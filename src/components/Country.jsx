import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import { importCountries } from '../actions';

class CountryComponent extends Component {
    componentWillMount() {
        this.props.importCountries();
    }

    render() {
        let { countries, ownProps } = this.props;

        document.documentElement.scrollTop = 0;

        let country = countries.find((country) => {
           return country.name === ownProps.match.params.country
        });

        return (
            /*country
            ? <section className="country">
                    <img src={country.img} alt={country.name}/>

                    <div className="country__description">{country.description}</div>

                    <NavLink to="./" className="country__back-btn">
                        <FontAwesome name="long-arrow-left"/>
                        Back To All Countries
                    </NavLink>
                </section>
            :*/ null
        )
    }
}

CountryComponent.propTypes = {
    countries: PropTypes.array,
    ownProps: PropTypes.object,
    importCountries: PropTypes.func
};

let mapStateToProps = (state, ownProps) => {
    return {
        countries: state.countries,
        ownProps
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        importCountries: () => dispatch(importCountries())
    }
};

const Country = connect(mapStateToProps, mapDispatchToProps)(CountryComponent);

export default Country
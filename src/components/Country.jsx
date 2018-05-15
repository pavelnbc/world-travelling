import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { importCountries } from '../actions';

class CountryComponent extends Component {
    componentWillMount() {
        this.props.importCountries();
    }

    render() {
        let { countries, ownProps } = this.props;


        let country = countries.find((country) => {
           return country.name === ownProps.match.params.country
        });

        country = country ? country : {};

        return (
            country
            ? <section className="country">
                    <img src={country.img} alt={country.name}/>

                    <div className="country__description">{country.description}</div>

                    <NavLink to="./" className="country__back-btn">Back to all countries</NavLink>
                </section>
            : null
        )
    }
}

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
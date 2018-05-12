import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';  /*Календарь*/

import { importCountries } from '../actions'

class CountriesComponent extends Component {
    componentDidMount() {
        this.props.importCountries()
    }

    render() {
        let { countries} = this.props;

        return (
            <section className="countries">
                <div className="grid">
                    <div className="row">
                        <div className="xsHidden col-sm-3 col-md-3 col-lg-3">
                            <aside className="countries__calendar">
                                <Calendar/>
                            </aside>
                        </div>
                        <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                            <ul className="countries__list">
                                {countries.map((country) => {
                                    return (
                                        <li>
                                            <img src={country.img} alt={country.name}/>
                                            <div className="countries__name">{country.name}</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        importCountries: () => {dispatch(importCountries())}
    }
}

const Countries = connect(mapStateToProps, mapDispatchToProps)(CountriesComponent);

export default Countries
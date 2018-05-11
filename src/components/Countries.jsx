import React, { Component } from 'react';

import Calendar from 'react-calendar';

class Countries extends Component {
    render() {
        let { countriesList } = this.props;

        return (
            <section className="countries">
                <div className="grid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                            <aside className="calendar">
                                <Calendar/>
                            </aside>
                        </div>
                        {/*<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="countries-list">
                                {countriesList.map((country) => {
                                    return (
                                        <ul>
                                            <li>{country.img}
                                                <div className="country-name">{country.name}</div>
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>*/}
                    </div>
                </div>
            </section>
        )
    }
}

export default Countries
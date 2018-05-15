import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { importDirections } from '../actions';

class DirectionsComponent extends Component {
    componentWillMount() {
        this.props.importDirections();
    }

    render() {
        let { directions } = this.props;

        return (
            <section className="directions">
                <h1>The most popular directions</h1>
                <ul className="directions__list">
                    {directions.map((direction) => {
                        return (
                            <li>
                                <NavLink to={`/countries/${direction.name}`}>
                                    <img src={direction.img} alt={direction.name}/>
                                    <div className="direction">{direction.name}</div>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        directions: state.directions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        importDirections: () => dispatch(importDirections())
    }
}

const Directions = connect(mapStateToProps, mapDispatchToProps)(DirectionsComponent);

export default Directions
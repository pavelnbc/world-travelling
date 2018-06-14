import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            <section className="directions" id="indicator">
                <h1>The most popular directions</h1>
                <ul className="directions__list">
                    {directions.map((direction, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={`/countries/${direction.direction}`}>
                                    <img src={direction.img} alt={direction.direction}/>
                                    <div className="direction">{direction.direction}</div>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

DirectionsComponent.propTypes = {
    directions: PropTypes.array,
    importDirections: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        directions: state.directions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        importDirections: () => dispatch(importDirections())
    }
};

const Directions = connect(mapStateToProps, mapDispatchToProps)(DirectionsComponent);

export default Directions
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { importAdvantages } from '../actions'

class AdvantagesComponent extends Component {
    componentWillMount() {
        this.props.importAdvantages();
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {               // Плавно пояявляющиеся advantages
            let advantages = document.getElementById('advantages');

            if(advantages) {
                let advantagesChildren = document.getElementById('advantages').childNodes;
                let timer = 0;

                if(window.scrollY >= advantages.offsetTop - advantages.offsetHeight) {
                   advantagesChildren.forEach((child) => {
                       timer += 200;

                       setTimeout(() => {
                           child.style.opacity = 1
                       }, timer)
                   })
                }
            }
        })
    }

    render() {
        const { advantages } = this.props;

        return (
            <section className="advantages" >
                <h1>Our Advantages</h1>
                <div className="under-line"></div>
                <ul className="advantages__list" id="advantages">
                    {advantages.map((advantage) => {
                        return (
                            <li>
                                <img src={advantage.img} alt={advantage.alt}/>
                                {advantage.title}
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
        advantages: state.advantages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        importAdvantages: () => dispatch(importAdvantages())
    }
};

const Advantages = connect(mapStateToProps, mapDispatchToProps)(AdvantagesComponent);

export default Advantages
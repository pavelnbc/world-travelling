import React from 'react';

function Directions() {
    return (
        <section className="directions">
            <h1>The most popular directions</h1>
            <ul className="directions__list">
                <li>
                    <img src="/img/directions/paris.jpg" alt="Paris"/>
                    <div className="description">
                        <div className="city">Paris</div>
                    </div>
                </li>
                <li>
                    <img src="/img/directions/london.jpg" alt="London"/>
                    <div className="description">
                        <div className="city">London</div>
                    </div>
                </li>
                <li>
                    <img src="/img/directions/rome.jpg" alt="Rome"/>
                    <div className="description">
                        <div className="city">Rome</div>
                    </div>
                </li>
                <li>
                    <img src="/img/directions/madrid.jpg" alt="Madrid"/>
                    <div className="description">
                        <div className="city">Madrid</div>
                    </div>
                </li>
                <li>
                    <img src="/img/directions/praga.jpg" alt="Prague"/>
                    <div className="description">
                        <div className="city">Prague</div>
                    </div>
                </li>
                <li>
                    <img src="/img/directions/vienna.jpg" alt="Vienna"/>
                    <div className="description">
                        <div className="city">Vienna</div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Directions
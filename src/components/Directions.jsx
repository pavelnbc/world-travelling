import React from 'react';

function Directions() {
    return (
        <section className="directions">
            <h1>The most popular directions</h1>
            <ul className="directions__list">
                <li>
                    <img src="/img/directions/paris.jpg" alt="Paris"/>
                    <div className="direction">Paris</div>
                </li>
                <li>
                    <img src="/img/directions/london.jpg" alt="London"/>
                    <div className="direction">London</div>
                </li>
                <li>
                    <img src="/img/directions/rome.jpg" alt="Rome"/>
                    <div className="direction">Rome</div>
                </li>
                <li>
                    <img src="/img/directions/madrid.jpg" alt="Madrid"/>
                    <div className="direction">Madrid</div>
                </li>
                <li>
                    <img src="/img/directions/praga.jpg" alt="Prague"/>
                    <div className="direction">Prague</div>
                </li>
                <li>
                    <img src="/img/directions/vienna.jpg" alt="Vienna"/>
                    <div className="direction">Vienna</div>
                </li>
            </ul>
        </section>
    )
}

export default Directions
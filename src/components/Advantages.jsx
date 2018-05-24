import React, { Component } from 'react';

class Advantages extends Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {               // Плавно пояявляющиеся advantages
            let advantages = document.getElementById('advantages');

            if(advantages) {
                let advantagesChildren = document.getElementById('advantages').childNodes;
                let timer = 0;

                if(window.scrollY >= advantages.offsetTop - advantages.offsetHeight) {
                    for(let i = 0; i < advantagesChildren.length; i++) {
                        timer += 200;

                        setTimeout(() => {
                            advantagesChildren[i].style.opacity = 1;
                        }, timer);
                    }
                }
            }
        })
    }

    render() {
        return (
            <section className="advantages" >
                <h1>Our Advantages</h1>
                <div className="under-line"></div>
                <ul className="advantages__list" id="advantages">
                    <li>
                        <img src="/img/advantage__icons/clock.png" alt="clock"/>
                        Fast filling of documents
                    </li>
                    <li>
                        <img src="/img/advantage__icons/world.png" alt="world"/>
                        Large variety of counties
                    </li>
                    <li>
                        <img src="/img/advantage__icons/experience.png" alt="experience"/>
                        Ten years experience in <br/> traveling business
                    </li>
                    <li>
                        <img src="/img/advantage__icons/manager.png" alt="manager"/>
                        Your personal manager in tour
                    </li>
                    <li>
                        <img src="/img/advantage__icons/discounts.png" alt="discounts"/>
                        Discounts for repeat customers
                    </li>
                    <li>
                        <img src="/img/advantage__icons/support.png" alt="support"/>
                        24/7 customers support
                    </li>
                </ul>
            </section>
        )
    }
}

export default Advantages
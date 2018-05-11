import React, { Component } from 'react';
import classNames from 'classnames';

import Content from './components/Content';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import AboutUs from './components/AboutUs';
import Directions from './components/Directions';
import Advantages from './components/Advantages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appVisibility: false
        };

        this.pageAppearance = this.pageAppearance.bind(this);
    }

    pageAppearance() {
        this.timeoutId = setTimeout(() => {
            this.setState({
                appVisibility: true
            });

            this.state.appVisibility = false;

            clearTimeout(this.timeoutId)
        }, 200);
    }

    componentDidMount() {
        this.pageAppearance();

        let header = document.getElementById('header');

        window.addEventListener('scroll', () => {
            if(window.scrollY > 150) {
                header.classList.add('header__fixed');
            } else {
                header.classList.remove('header__fixed');
            }
        });
    }

    componentDidUpdate() {
        this.pageAppearance();
    }

    render() {
        const appClassName = classNames({
            app: true,
            'app-visible': this.state.appVisibility
        });

        return (
            <main className={appClassName}>
                <Content>
                    <Header/>
                    <MainBanner/>
                    <AboutUs/>
                    <Directions/>
                    <Advantages/>
                    <ContactForm/>
                </Content>
                <Footer/>
            </main>
        )
    }
}

export default App
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames';

import Content from './components/Content';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Countries from './components/Countries';
import Country from './components/Country';
import Contacts from './components/Contacts';
import About from './components/About';
import Anchor from './components/Anchor';
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
        });
    }

    componentDidMount() {
        this.pageAppearance();

        let header = document.getElementById('header');

        window.addEventListener('scroll', () => {               // фиксированный хедер
            if(window.scrollY > header.offsetHeight / 2) {
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
                    <Switch>
                        <Route path="/countries/:country" component={Country}/>
                        <Route path="/countries" component={Countries}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/about" component={About}/>
                        <Route path="/" component={MainPage}/>
                    </Switch>
                    <Anchor/>
                </Content>
                <Footer/>
            </main>
        )
    }
}

export default App
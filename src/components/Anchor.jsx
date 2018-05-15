import React, { Component } from 'react';

class Anchor extends Component {
    componentDidMount() {
        const anchor = document.getElementById('anchor');

        window.addEventListener('scroll', () => {
            anchor.style.opacity = window.pageYOffset / 1000;
        });
    }

    render(){
        let liftPageToTop = () => {
            requestAnimationFrame(function pageLifter() {
                document.documentElement.scrollTop -= 50;
                document.body.scrollTop -= 50;

                if(window.pageYOffset) {
                    requestAnimationFrame(pageLifter)
                }
            })
        };



        return (
            <div className="anchor" id="anchor" onClick={liftPageToTop}></div>
        )
    }
}

export default Anchor
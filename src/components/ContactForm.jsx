import React, { Component } from 'react';

class ContactForm extends Component {


    render() {
        return (
            <section className="contact-form">
                <h2>We are waiting for your call!</h2>
                <div className="contact-form__address-and-form">
                    <div className="contact-form__address">
                        <p>
                            10 Oak street, Austin, TX, 35789
                        </p>
                        <p>
                            random@aol.com
                        </p>
                        <p>
                            Tel. number: +1(452) 683-33-95
                        </p>
                        <p>
                            Working hours:
                        </p>
                        <p>
                            Mon-Fri: 9:00-19:00 <br/>
                            Sat: 10:00-14:00 <br/>
                            Sun: day off <br/>
                        </p>
                    </div>
                    <form className="contact-form__form">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Topic"/>
                        <textarea cols="21" rows="10" placeholder="Description"></textarea>
                        <button disabled>Send</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default ContactForm
import React from 'react';

function Contacts() {
    return (
        <section className="contacts">
            <iframe
                className="contacts__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.9058070313363!2d-97.7663439848803!3d30.239762481811734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4c2a54524db%3A0x741ec65f9deba517!2zT2FrIENyZXN0IEF2ZSwgQXVzdGluLCBUWCA3ODcwNCwg0KHQv9C-0LvRg9GH0LXQvdGWINCo0YLQsNGC0Lgg0JDQvNC10YDQuNC60Lg!5e0!3m2!1suk!2sua!4v1526407427857"
                allowfullscreen
            />

            <p>10 Oak Crest Ave, Austin, TX, 78704</p>

            <p>random@aol.com</p>

            <p>+1(452) 683-33-95</p>

            <p className="contacts-bold">Contact us any time</p>

            <p className="contacts-bold">We will be waiting for your call!</p>
        </section>
    )
}

export default Contacts
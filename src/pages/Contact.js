import { React, useState } from 'react'
import axios from 'axios';

const formEndpoint = process.env.REACT_APP_WP_API_FORM_ENDPOINT;

const ContactForm = () => {
    // setup state for contact form
    const [submitted, setSubmitted] = useState(false);
    // handle a submit
    const handleSubmit = event => {
        event.preventDefault()
        axios.post(formEndpoint, {
            'your-name': 'Fred',
            'your-email': 'Flintstone',
            'your-message': 'Message'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        // update state to show submitted
        setSubmitted(true);
    };
    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <p>We'll be in touch soon.</p>
            </>
        );
    }
    return (
        <form
            onSubmit={handleSubmit}
            method="POST"
        // target="_blank"
        >
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                // required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                // required
                />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                // required
                />
            </div>
            <div>
                <button
                    className="regular-button"
                    type="submit"
                >
                    Send a message
                </button>
            </div>
        </form>
    );
}

const Contact = () => {
    return (
        <div id="contact-container" className="page-container">
            <div className="section">
                <h2>Contact us</h2>

                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
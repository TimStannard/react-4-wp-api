import { React, useState } from 'react'
import axios from 'axios';

const formEndpoint = process.env.REACT_APP_WP_API_FORM_ENDPOINT;

const ContactForm = () => {

    // let testSubmission = new FormData();
    // testSubmission.append('your-name', 'Tim')
    // testSubmission.append('your-email', 'Tim@Tim.com')
    // testSubmission.append('your-message', 'Test')

    // setup state for contact form
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    // handle a submit
    const handleSubmit = event => {
        event.preventDefault()

        // Format your body response
        // const emailBody = {
        //     "your-name": "test",
        //     "your-email": "stannard.tim@gmail.com",
        //     "your-message": "test",
        // };

        // ----Create a FormData object, and append each field to the object
        // form data is necessary to meet criteria of post request in contact form 7
        // it's a default javascript function, not unique to react
        const testForm = new FormData();
        testForm.append('your-name', 'Tim')
        testForm.append('your-email', 'Tim@Tim.com')
        testForm.append('your-message', 'Test')

        // ----post the form, using axios.post
        // first argument is the formEndpoint, second is the data
        axios.post(formEndpoint, testForm, {
            // include headers to tell the mail service we're sending a form
            // headers tell the server what to expect
            // e.g. remember back to when we used headers to send an API key with spotify API
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        })
            .then(function (response) {
                console.log(response);
                // update state to show submitted
                setSubmitted(true);
            })
            .catch(function (error) {
                console.log(error);
                // update state to show error
                setError(true);
            });
    };
    if (submitted) {
        return (
            <>
                <h3>Thank you!</h3>
                <p>We'll be in touch soon.</p>
            </>
        );
    }
    if (error) {
        return (
            <>
                <h3>Error!</h3>
                <p>Sorry, we were unable to send your message.</p>
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
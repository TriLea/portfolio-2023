import React from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form>
                <div className="input-field">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div className="input-field">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;

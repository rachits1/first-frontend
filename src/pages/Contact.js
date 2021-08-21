import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="container contact__container">
            <div className="contact flex">
                <div className="contact__left">
                    <img src="/images/contact-bg.jpg" alt="contact__img" />
                </div>
                <div className="contact__right flex">
                    <div className="cright__head flex">
                        <h2>Contact Us</h2>
                        <div className="space"></div>
                    </div>

                    <form>
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="phone" placeholder="Phone"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;

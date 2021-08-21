import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


function Footer() {
    return (
        <div className="footer__container">
            <div className="container footer">
                <div className="ftr__upper flex">
                    <h2>Subscribe to our newsletter to receive exciting offers and latest updates</h2>
                    <p>You can unsubscribe at any time.</p>
                    <input type="email" placeholder="Your Email"/>
                    <button className="subscribe__btn">Subscribe</button>
                </div>

                <div className="ftr__lower flex">
                    <div className="same__list">
                        <h3>About Us</h3>
                        <ul className="ftr__list">
                            <li>How it works</li>
                            <li>Testimonials</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div className="same__list">
                        <h3>Contact Us</h3>
                        <ul className="ftr__list">
                            <li>Contact</li>
                            <li>Support</li>
                            <li>Sponsorships</li>
                        </ul>
                    </div>

                    <div className="same__list">
                        <h3>Videos</h3>
                        <ul className="ftr__list">
                            <li>Submit Videos</li>
                            <li>Ambassadors</li>
                            <li>Agency</li>
                            <li>Influencer</li>
                        </ul>
                    </div>

                    <div className="same__list">
                        <h3>Social Media</h3>
                        <ul className="ftr__list">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>

                <div className="ftr__bottom flex">
                    <div className="logo flex">
                        <h2>guitarIsta</h2>
                        <i className="fas fa-guitar fa-lg"></i>
                    </div>
                    <h5>guitarIsta &copy; 2021</h5>

                    <div className="icons flex">
                        <FacebookIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                        <TwitterIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

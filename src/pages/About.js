import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about__container">
            <div className="about__img flex">
                <img src="/images/about.jpg" alt="about-img" />
                <h1 className="about__heading">About Us</h1>
            </div>
            <div className="container about__content">
                <h2>WHAT WE DO</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Ac tincidunt vitae semper quis lectus nulla. Et malesuada fames ac turpis egestas maecenas pharetra.</p>
                <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna. Eget nullam non nisi est. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Risus pretium quam vulputate dignissim suspendisse in est ante in. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus.</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo nec ultrices dui sapien eget. Enim ut sem viverra aliquet eget sit amet.</p>
            </div>
        </div>
    )
}

export default About

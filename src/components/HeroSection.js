import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero__container flex">
            <video src="/videos/background.mp4" autoPlay loop muted />
            <div className="hero__content">
                <h1>What are you waiting for ?</h1>
                <p>Start your musical journey with us.</p>
            </div>
        </div>
    )
}

export default HeroSection;
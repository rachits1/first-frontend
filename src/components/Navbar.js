import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

function Navbar(){
    const [click, setClick] = useState(false);
    function handleClick() {
        setClick(!click)
    }

    return (
        <div className="nav__container">
            <div className="container nav flex">
                <div className="logo flex">
                    <h2>guitarIsta</h2>
                    <i className="fas fa-guitar fa-lg"></i>
                </div>
                <ul className={click ? "nav__list active flex" : "nav__list flex"}>
                    <li><Link to="/" className="nav__item">Home</Link></li>
                    <li><Link to="/about" className="nav__item">About Us</Link></li>
                    <li><Link to="/contact" className="nav__item">Contact Us</Link></li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? <ClearIcon /> : <MenuIcon />}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
import React, { useState } from "react";
import "../Navbar/stylesss.scss"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <span className='nav-logo'>asdasd</span>

            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Features</a>
            </div>

            <div>Contact</div>

            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='bar'></div>
            </div>
        </nav>
    )
}

export default Navbar
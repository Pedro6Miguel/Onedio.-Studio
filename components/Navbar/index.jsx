import React, { useState } from "react";
import "../Navbar/styles.scss"

import Logo from "../../public/OnedioLogo.svg"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <span className='nav-logo'><img src={Logo} alt="" /></span>

            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Features</a>
            </div>

            <div><button className="primary">Contact</button></div>

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
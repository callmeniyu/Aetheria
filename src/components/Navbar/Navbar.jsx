import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import Logo from "../../assets/svg/logo_with_text.jsx"
import LogoWhite from "../../assets/svg/logo_white.jsx"
import { IoMenu } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";




const Navbar = () => {
    const [menuToggler, setMenuToggler] = useState(false)
    console.log(menuToggler)
    return (
        <>
            <div className={`navbar ${menuToggler ? "nav-on" : "nav-off"}`}>
                <Logo className="navbar-logo" />
                <LogoWhite className={`nav-on-logo ${menuToggler ? "nav-on-logo" : "nav-off-logo"}`}/>
                <AiOutlineCloseCircle className="nav-on-close-icon"  onClick={()=>setMenuToggler(false)} />
                <ul className="navbar-elements">
                    <li>
                        <Link>Join</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Blogs</Link>
                    </li>
                    <li>
                        <Link>Events</Link>
                    </li>
                    <li>
                        <Link>Activities</Link>
                    </li>
                </ul>
                {menuToggler ? <Button text="Login" className="blue-btn login-btn" to="/login" /> : <FaRegUser className="nav-user-icon"/>}
            </div>
            <IoMenu
                className={`navbar-menu-icon ${menuToggler ? "nav-menu-on" : "nav-menu-off"}`}
                onClick={() => setMenuToggler((prev) => !prev)}
            />
            <div className={`nav-social-icons ${menuToggler ? "nav-social-on" : "nav-social-off"}`}>
                <p>aetheria@gmail.com</p>
                <Link><FaInstagram className="nav-social-icon"/></Link>
                <Link><FaLinkedinIn className="nav-social-icon"/></Link>
            </div>
        </>
    )
}

export default Navbar


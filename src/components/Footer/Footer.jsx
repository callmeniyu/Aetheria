import React from "react"
import "./Footer.css"
import Logo from "../../assets/svg/logo_white.jsx"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-main">
            <div className="footer-left">
                <p>
                    Main Block <br />
                    Excel Engineering College <br />
                    Komaraplayam, Salem, Tamil Nadu
                </p>
                <div className="footer-social">
                    <FaInstagram className="footer-social-icon" />
                    <FaLinkedinIn className="footer-social-icon" />
                </div>
                <p className="footer-copyright">©{new Date().getFullYear}. All Rights Reserved.</p>
            </div>
            <div className="footer-right">
                <Logo className="footer-logo" />
            </div>
            </div>
        </div>
    )
}

export default Footer

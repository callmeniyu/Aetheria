import React from "react"
import "./Team.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import Niyas from "../../assets/images/niyas_img.png"
import Mohit from "../../assets/images/mohit_img.png"
import Rizad from "../../assets/images/rizad_img.png"
import Safdar from "../../assets/images/safdar_img.png"
import Sadiq from "../../assets/images/sadiq_img.png"
import Muhsin from "../../assets/images/muhsin_img.png"

const Team = () => {
    return (
        <div className="team">
            <SectionTitle text="Team" />
            <h2 className="section-header">Meet Our Team</h2>
            <div className="team-main">
                <div className="team-top">
                    <div className="team-member">
                        <img src={Niyas} alt="team-member" className="niyas-img"/>
                        <h3>Mohammed Niyas</h3>
                        <p>Founder</p>
                        <div className="team-member-social">
                            <BiLogoGmail className="team-member-social-icon"/>
                            <FaLinkedinIn className="team-member-social-icon"/>
                            <CiGlobe className="team-member-social-icon"/>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={Mohit} alt="team-member" />
                        <h3>Mohit Mishra</h3>
                        <p>Co-Founder</p>
                        <div className="team-member-social">
                            <BiLogoGmail className="team-member-social-icon"/>
                            <FaLinkedinIn className="team-member-social-icon"/>
                            <CiGlobe className="team-member-social-icon"/>
                        </div>
                    </div>
                </div>
                <div className="team-bottom">
                    <div className="team-member">
                        <img src={Rizad} alt="team-member" />
                        <h3>Rizad</h3>
                        <p>Technical Lead</p>
                        <div className="team-member-social">
                            <BiLogoGmail className="team-member-social-icon"/>
                            <FaLinkedinIn className="team-member-social-icon"/>
                            <CiGlobe className="team-member-social-icon"/>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={Muhsin} alt="team-member" />
                        <h3>Muhsin Kalodi</h3>
                        <p>CFO</p>
                        <div className="team-member-social">
                            <BiLogoGmail className="team-member-social-icon"/>
                            <FaLinkedinIn className="team-member-social-icon"/>
                            <CiGlobe className="team-member-social-icon"/>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={Safdar} alt="team-member" />
                        <h3>Safdar Ansari</h3>
                        <p>Social Lead</p>
                        <div className="team-member-social">
                            <BiLogoGmail className="team-member-social-icon"/>
                            <FaLinkedinIn className="team-member-social-icon"/>
                            <CiGlobe className="team-member-social-icon"/>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={Sadiq} alt="team-member" />
                        <h3>Sadiq</h3>
                        <p>Event Coordinator</p>
                        <div className="team-member-social">
                            <BiLogoGmail className="team-member-social-icon"/>
                            <FaLinkedinIn className="team-member-social-icon"/>
                            <CiGlobe className="team-member-social-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team

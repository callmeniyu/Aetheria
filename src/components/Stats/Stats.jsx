import React, { useEffect, useState } from "react"
import "./Stats.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import { MdEventAvailable } from "react-icons/md"
import { IoIosPeople } from "react-icons/io"
import { FaHandshake } from "react-icons/fa6"
import { FaMedal } from "react-icons/fa6"
import { FaHourglassStart } from "react-icons/fa6"
import { RiHandCoinFill } from "react-icons/ri"

const Stats = () => {
    const Number = ({ n }) => {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 },
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    }
    return (
        <div className="stats">
            <SectionTitle text="Statistics" />
            <h2 className="section-header">Impact In Numbers</h2>
            <div className="stats-main">
                <div className="stats-left">
                    <p>
                        Over the past two years, our dedicated community has grown to include members from various fields
                        committed to making a difference.
                    </p>
                    <p>
                        By hosting dynamic events, forging strong partnerships with reputable companies, and securing
                        funding from investors, we've created a thriving ecosystem that drives innovation and impact.
                    </p>
                </div>
                <div className="stats-right">
                    <div className="stats-detail stats-events">
                        <MdEventAvailable className="stats-icon" />
                        <h3>{ num }+</h3>
                        <p>Events</p>
                    </div>
                    <div className="stats-detail stats-members">
                        <IoIosPeople className="stats-icon" />
                        <h3><Number n={ 1000} />+</h3>
                        <p>Members</p>
                    </div>
                    <div className="stats-detail stats-hours">
                        <FaHourglassStart className="stats-icon" />
                        <h3>5000+</h3>
                        <p>Community Hours</p>
                    </div>
                    <div className="stats-detail stats-experience">
                        <FaMedal className="stats-icon" />
                        <h3>2+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stats-detail stats-partners">
                        <FaHandshake className="stats-icon" />
                        <h3>20+</h3>
                        <p>Partners</p>
                    </div>
                    <div className="stats-detail stats-fund">
                        <RiHandCoinFill className="stats-icon" />
                        <h3>50K+</h3>
                        <p>Fund Raised</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats

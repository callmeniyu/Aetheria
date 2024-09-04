import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { MdEventAvailable } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaHandshake, FaMedal, FaHourglassStart } from "react-icons/fa6";
import { RiHandCoinFill } from "react-icons/ri";
import CountUp from 'react-countup';
import Shape1 from "../../assets/svg/stats-shape1.svg"
import Shape2 from "../../assets/svg/stats-shape2.svg"

const Stats = () => {
    const [inView, setInView] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Stop observing after it's in view
                }
            });
        });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [statsRef]);

    return (
        <div className="stats" ref={statsRef}>
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
                <img src={Shape1} alt="element1" className="stats-shape1"/>
                <img src={Shape2} alt="element1" className="stats-shape2"/>
                    <div className="stats-detail stats-events">
                        <MdEventAvailable className="stats-icon" />
                        <h3>{inView && <CountUp end={50} duration={4} />}+</h3>
                        <p>Events</p>
                    </div>
                    <div className="stats-detail stats-members">
                        <IoIosPeople className="stats-icon" />
                        <h3>{inView && <CountUp end={1000} duration={2} />}+</h3>
                        <p>Members</p>
                    </div>
                    <div className="stats-detail stats-hours">
                        <FaHourglassStart className="stats-icon" />
                        <h3>{inView && <CountUp end={5000} duration={2} />}+</h3>
                        <p>Community Hours</p>
                    </div>
                    <div className="stats-detail stats-experience">
                        <FaMedal className="stats-icon" />
                        <h3>{inView && <CountUp end={2} duration={10} />}+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stats-detail stats-partners">
                        <FaHandshake className="stats-icon" />
                        <h3>{inView && <CountUp end={10} duration={4} />}+</h3>
                        <p>Partners</p>
                    </div>
                    <div className="stats-detail stats-fund">
                        <RiHandCoinFill className="stats-icon" />
                        <h3>{inView && <CountUp end={50} duration={4} />}K+</h3>
                        <p>Fund Raised</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
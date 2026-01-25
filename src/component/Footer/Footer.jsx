import React, { useEffect } from "react";
import video2 from "./../../Assets/video2.mp4";
import "./Footer.scss";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiTripadvisor } from "react-icons/si";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footerSection ">
      <div className="videoDiv">
        <video
          className="video2"
          src={video2}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="secContent container section">
        <div className="contactDiv">
          <div className="text" data-aos="fade-up">
            <small>KEEP IN TOUCH</small>
            <h1>Travel With Us</h1>
          </div>

          <div className="inputDiv">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
              className="footerInput"
            />
            <button data-aos="fade-up" className="btn sendBtn" type="submit">
              SEND
              <FiSend className="sendIcon" />{" "}
            </button>
          </div>
        </div>
        <div className="cardDiv" data-aos="fade-up">
          <div className="leftDiv">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                <h1>Travel.</h1>
              </a>
            </div>
            <p
              className="footerText"
              data-aos="fade-up"
              data-aos-duratio="3000"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              tempore autem nam. sit amet consectetur adipisicing elit. Velit
              tempore autem nam.dolor, sit amet consectetur adipisicing elit.
              esse ipsa vitae odit voluptatem, ipsum quasi praesentium
              similique.
            </p>
            <div className="iconsDiv" data-aos="fade-up">
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <RiInstagramFill className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>

          <div className="rightDiv">
            <div
              className="linkGroup"
              data-aos="fade-up"
              data-aos-duratio="3000"
            >
              <small className="groupTitle">OURAGANCY</small>

              <li>
                <FiChevronRight className="icon" /> services
              </li>
              <li>
                <FiChevronRight className="icon" />
                insurance
              </li>
              <li>
                <FiChevronRight className="icon" />
                agancy
              </li>
              <li>
                <FiChevronRight className="icon" />
                tourism
              </li>
              <li>
                <FiChevronRight className="icon" />
                payment
              </li>
            </div>
            <div
              className="linkGroup"
              data-aos="fade-up"
              data-aos-duratio="4000"
            >
              <small className="groupTitle">PARTNERS</small>
              <li>
                <FiChevronRight className="icon" />
                Booking
              </li>
              <li>
                <FiChevronRight className="icon" />
                RentalCar
              </li>
              <li>
                <FiChevronRight className="icon" />
                Hotelworld
              </li>
              <li>
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li>
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            <div
              className="linkGroup"
              data-aos="fade-up"
              data-aos-duratio="5000"
            >
              <small className="groupTitle">LAST MINUTE</small>
              <ul>
                <li>
                  <FiChevronRight className="icon" />
                  London
                </li>
                <li>
                  <FiChevronRight className="icon" />
                  Calefornia
                </li>
                <li>
                  <FiChevronRight className="icon" />
                  Indonesia
                </li>
                <li>
                  <FiChevronRight className="icon" />
                  Europe
                </li>
                <li>
                  <FiChevronRight className="icon" />
                  Oceania
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

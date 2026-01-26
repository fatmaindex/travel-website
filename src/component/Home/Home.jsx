import React, { useEffect } from "react";
import "./Home.scss";
import poster from "../../Assets/videoFrame.avif";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { FaTripadvisor } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <video
        className="video"
        src="/assets/video.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        poster={poster}
      >
      </video>
      <div className="overlay"></div>
      <div className="HomeContent container">
        <div className="textDiv">
          <span data-aos="fade-right" className="smallText">
            OUR PACAGES
          </span>
          <h1 data-aos="fade-right" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>
        <div data-aos="fade-right" className="formDiv">
          <div className="homeInputs">
            <div className="searchDiv">
              <label htmlFor="search">Search your destination:</label>
              <div className="input">
                <input
                  type="text"
                  id="search"
                  placeholder="write name here..."
                />
                <GrLocation className="glicon" />
              </div>
            </div>
            <div className="dateDiv">
              <label htmlFor="date">Select your date:</label>
              <div className="input">
                <input type="date" id="date" />
              </div>
            </div>

            <div className="priceDiv">
              <div className="lable-total">
                <label htmlFor="range">Max price:</label>

                <h3>$5000</h3>
              </div>
              <div className="input">
                <input type="range" max="5000" min="1000" className="range" />
              </div>
            </div>
          </div>
          <button className="btn filterOptions">
            <FaFilter className="filterIcon" /> <span>MORE FILTERS </span>
          </button>
        </div>

        <div className="homeIcons">
          <div className="rightIcons" data-aos="fade-right">
            <SlSocialFacebook className="socialIcons" />
            <IoLogoInstagram className="socialIcons" />
            <FaTripadvisor className="socialIcons" />
          </div>
          <div className="leftIcons" data-aos="fade-right">
            <BsListUl className="socialIcons" />
            <TbApps className="socialIcons" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

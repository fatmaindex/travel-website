import React from "react";
import "./Card.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa";

function Card({ imgSrc, destTitle, location, fees, discription }) {
  return (
    <div className="card" data-aos="fade-up">
      <div className="imgDiv">
        <img alt="img" src={imgSrc} loading="lazy"></img>
      </div>
      <div className="cardContent">
        <div className="countryDiv">
          <h3>{destTitle}</h3>
          <HiOutlineLocationMarker className="glIcon" />
          <span>{location}</span>
        </div>
        <div className="secondDiv">
          <div className="cultural">
            <p> Cultural</p>
            <span>RELAX </span> <span className="btn ">+1</span>
          </div>
          <h2 className="price">{fees}</h2>
        </div>
        <div className="descriptionDiv">
          <p>{discription}</p>
          <button className="btn detailsBtn">
            {" "}
            DETAILS <FaClipboardCheck className="detailsIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

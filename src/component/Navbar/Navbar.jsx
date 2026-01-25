import React, { useState } from "react";
import "./Navbar.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  const [nav, setnav] = useState("navBar");

  const showNav = () => {
    setnav("navBar activeNavbar");
  };
  const hideNav = () => {
    setnav("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <MdOutlineTravelExplore className="icon" />
            <h1>Travel.</h1>
          </a>
        </div>

        <div className={nav}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pacage
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn ">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div className="closeNavbar" onClick={hideNav}>
            <IoMdCloseCircle className="icon" />
          </div>
        </div>
        <div className="toggleNavbar " onClick={showNav}>
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Navbar;

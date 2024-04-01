import { useState } from "react";
import styled from "./HomePage.module.css";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import FacebookQr from "./FacebookQR";
// import FacebookQr from "./FacebookQR";
function HomePage({ setOpenFacebook }) {
  const controller = () => {
    setOpenFacebook(false);
  };
  return (
    <>
      <div className={styled.homePage}>
        <div className={styled.information}>
          Social Media QR Code Generator: Easily Share Your Facebook, Instagram,
          and YouTube Profiles!
        </div>

        <div className={styled.socialMedia}>
          <div className={styled.forFacebook} onClick={controller}>
            <FaFacebook />
            <p onClick={<FacebookQr />}>Facebook</p>
          </div>

          <div className={styled.forInstagram}>
            <LuInstagram />
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

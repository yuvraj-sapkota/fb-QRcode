import { useState } from "react";
import styled from "./HomePage.module.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import FacebookQr from "./FacebookQR";
import InstagramQR from "./InstagramQR";
import YoutubeQR from "./YoutubeQR";

function HomePage({ setOpenFacebook }) {
  const facebookController = () => {
    setOpenFacebook("facebook");
  };
  const instagramController = () => {
    setOpenFacebook("instagram");
  };
  const youtubeController = () => {
    setOpenFacebook("youtube");
  };

  return (
    <>
      <div className={styled.homePage}>
        <div className={styled.information}>
          Social Media QR Code Generator: Easily Share Your Facebook, Instagram,
          and YouTube Profiles!
        </div>

        <div className={styled.socialMedia}>
          <div className={styled.forFacebook} onClick={facebookController}>
            {/* <FaFacebook /> */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfxNumac0HAiwNSjS1eVy1asV6-agYN5qcpILAWy0LQ&s"
              alt=""
            />
            <p onClick={<FacebookQr />}>Facebook</p>
          </div>

          <div className={styled.forInstagram} onClick={instagramController}>
            {/* <LuInstagram /> */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
              alt=""
            />
            <p onClick={<InstagramQR />}>Instagram</p>
          </div>

          <div className={styled.forYoutube} onClick={youtubeController}>
            {/* <FaYoutube /> */}

            <img
              src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg"
              alt=""
            />
            <p onClick={<YoutubeQR />}>Youtube</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

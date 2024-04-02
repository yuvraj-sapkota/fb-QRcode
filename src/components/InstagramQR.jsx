import styled from "./FacebookQR.module.css";
import React, { useState } from "react";
import QRCode from "qrcode.react";
import * as htmlToImage from "html-to-image";

import { saveAs } from "file-saver";

function InstagramQR({ setOpenFacebook }) {
  const [profileLink, setProfileLink] = useState("");
  const [qrCodeData, setQRCodeData] = useState("");

  const [error, setError] = useState("");

  const generateQRCode = () => {
    if (!isValidUrl(profileLink)) {
      setError("Invalid URL. Please enter a valid Instagram profile link.");
      return;
    }

    setQRCodeData(profileLink);
    setError("");
    setProfileLink("");
  };

  const isValidUrl = (url) => {
    // Check if the URL contains "facebook" or "facebook.com"
    return /instagram(\.com)?/i.test(url);
  };

  const handleDownload = () => {
    if (!qrCodeData) return; // No QR code data to download

    // Convert QR code component to image
    const qrCodeElement = document.getElementById("qrCodeImage");
    if (!qrCodeElement) return;

    htmlToImage
      .toBlob(qrCodeElement)
      .then(function (blob) {
        saveAs(blob, "qr_code.png");
      })
      .catch(function (error) {
        console.error("Error generating QR code image:", error);
      });
  };

  const backButton = () => {
    setOpenFacebook(null);
  };


  return (
    <>
      <div className={styled.facebookQR}>
        <button onClick={backButton}>Back</button>
        <div className={styled.facebookQRHero}>
          <div className={styled.facebookQRHeroInformation}>
            <span>
              <h4> Please enter your Instagram profile link below: </h4>
            </span>
            to generate a personalized QR code. This QR code will allow others
            to easily connect with you on Instagram. Simply paste your profile
            link in the provided field and click 'Generate QR Code' to create
            your personalized QR code.
          </div>
          <div className={styled.facebookQRHeroInputField}>
            <input
              type="text"
              placeholder="Enter Instagram Profile Link"
              value={profileLink}
              onChange={(e) => setProfileLink(e.target.value)}
            />
            <button onClick={generateQRCode}>Generate QR Code</button>
          </div>

          {<div className={styled.error}>{error}</div>}
        </div>

        <div className={styled.QRcode}>
          {qrCodeData && (
            <div className={styled.generateQRCode}>
              <QRCode
                id="qrCodeImage"
                value={qrCodeData}
                className={styled.code}
              />
              <button onClick={handleDownload}>Download</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default InstagramQR;

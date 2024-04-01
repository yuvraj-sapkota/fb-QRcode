import styled from "./FacebookQR.module.css";
import React, { useState } from "react";
import QRCode from "qrcode.react";
import * as htmlToImage from "html-to-image";

import { saveAs } from "file-saver";

function FacebookQr({ setOpenFacebook }) {
  const [profileLink, setProfileLink] = useState("");
  const [qrCodeData, setQRCodeData] = useState("");


  const [error, setError] = useState("");

  const generateQRCode = () => {
    if (!isValidUrl(profileLink)) {
      setError("Invalid URL. Please enter a valid Facebook profile link.");
      return;
    }

    setQRCodeData(profileLink);
    setError("");
    setProfileLink("");
  };

  const isValidUrl = (url) => {
    // Check if the URL contains "facebook" or "facebook.com"
    return /facebook(\.com)?/i.test(url);
  };

  const handleDownload = () => {
    if (!qrCodeData) return; // No QR code data to download

    // Convert QR code component to image
    const qrCodeElement = document.getElementById("qrCodeImage");
    if (!qrCodeElement) return;

    htmlToImage
      .toBlob(qrCodeElement)
      .then(function (blob) {
        // Trigger download
        saveAs(blob, "qr_code.png");
      })
      .catch(function (error) {
        console.error("Error generating QR code image:", error);
      });
  };

  const backButton = () => {
    setOpenFacebook(true);
  };

  return (
    <>
      <div className={styled.facebookQR}>
        <button onClick={backButton}>Back</button>
        <div className={styled.facebookQRHero}>
          <div className={styled.facebookQRHeroInformation}>
            <span>
              <h4> Please enter your Facebook profile link below: </h4>
            </span>
            to generate a personalized QR code. This QR code will allow others
            to easily connect with you on Facebook. Simply paste your profile
            link in the provided field and click 'Generate QR Code' to create
            your personalized QR code.
          </div>
          <div className={styled.facebookQRHeroInputField}>
            <input
              type="text"
              placeholder="Enter Facebook Profile Link"
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
              <QRCode id="qrCodeImage" value={qrCodeData} />
              <button onClick={handleDownload}>Download</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FacebookQr;

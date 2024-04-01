import styled from "./FacebookQR.module.css";
import React, { useState } from "react";
import QRCode from "qrcode.react";
function FacebookQr() {
  const [profileLink, setProfileLink] = useState("");
  const [qrCodeData, setQRCodeData] = useState("");

  const generateQRCode = () => {
    // Generate QR code based on profile link
    setQRCodeData(profileLink);
  };

  const parseProfileInfo = () => {
    // Parse profile info from the profile link
    // This is a simplified example, you may need more robust parsing logic
    const profileInfo = {
      username: profileLink.split("/").pop(),
      // Add more profile info parsing here
    };
    return profileInfo;
  };

  const handleQRCodeScan = (scannedData) => {
    // Decode scanned QR code data and extract profile details
    const profileInfo = parseProfileInfo();
    console.log(profileInfo);
    // Here you can display the profile info or use it as needed
  };
  return (
    <>
      <div className={styled.facebookQR}>
        <div className={styled.information}>
          "Social Media QR Code Generator: Easily Share Your Facebook,
          Instagram, and YouTube Profiles!"
        </div>
        <div className={styled.facebookQRHero}>
          <input
            type="text"
            placeholder="Enter Facebook Profile Link"
            value={profileLink}
            onChange={(e) => setProfileLink(e.target.value)}
          />
          <button onClick={generateQRCode}>Generate QR Code</button>
        </div>

        <div className={styled.QRcode}>
          {qrCodeData && (
            <div className={styled.generateQRCode}>
              <QRCode value={qrCodeData} />
              <button>Download</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FacebookQr;

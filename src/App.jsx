import "./App.css";
import React, { useState } from "react";
import QRCode from "qrcode.react";

function App() {
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
    <div>
      <input
        type="text"
        placeholder="Enter Facebook Profile Link"
        value={profileLink}
        onChange={(e) => setProfileLink(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeData && (
        <div>
          <QRCode value={qrCodeData} />
        </div>
      )}

      <button onClick={handleQRCodeScan}>Scan QR Code</button>
    </div>
  );
}

export default App;

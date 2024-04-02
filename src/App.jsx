import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FacebookQr from "./components/FacebookQR";
import InstagramQR from "./components/InstagramQR";
import YoutubeQR from "./components/YoutubeQR";
import Footer from "./components/Footer";

function App() {
  const [openFacebook, setOpenFacebook] = useState(null);

  return (
    <div>
      <Header />
      {openFacebook == null ? (
        <HomePage setOpenFacebook={setOpenFacebook} />
      ) : openFacebook == "facebook" ? (
        <FacebookQr setOpenFacebook={setOpenFacebook} />
      ) : openFacebook == "instagram" ? (
        <InstagramQR setOpenFacebook={setOpenFacebook} />
      ) : (
        <YoutubeQR setOpenFacebook={setOpenFacebook} />
      )}
      <Footer />
    </div>
  );
}

export default App;

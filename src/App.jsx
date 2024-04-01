import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FacebookQr from "./components/FacebookQR";

function App() {
  const [openFacebook, setOpenFacebook] = useState(true);

  return (
    <div>
      <Header />
      {openFacebook ? (
        <HomePage setOpenFacebook={setOpenFacebook} />
      ) : (
        <FacebookQr setOpenFacebook={setOpenFacebook} />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* Background glow circles */}
      <div className="glow-circle left"></div>
      <div className="glow-circle right"></div>

      {/* Page content */}
      <Navbar />
      <Home />
    </>
  );
}

export default App;

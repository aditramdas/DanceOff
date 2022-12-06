import React, { useEffect, useState } from "react";
import "./Rightbar.css";
import Webcam from "react-webcam";
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="header">
        <button className="choose">Teacher 1</button>
      </div>
      <div className="webcam">
        <Webcam
          style={{
            position: "relative",
            margin: "auto",
            top: "130px",
            left: "170px",
            width: 640,
            height: 480,
          }}
        />
      </div>
    </div>
  );
}

export default Rightbar;

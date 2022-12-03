import React from "react";
import "./Leftbar.css";
import video from "./benchmark_dance.mp4";
function Leftbar() {
  return (
    <div className="leftbar">
      <div className="upper">
        <video
          className="video"
          autoplay="true"
          disablepictureinpicture
          width="400"
          height="500"
          controls
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Leftbar;

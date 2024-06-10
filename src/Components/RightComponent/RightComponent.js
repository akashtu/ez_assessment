import React from "react";
import "./RightComponent.css";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FolderZipIcon from "@mui/icons-material/FolderZip";
export const RightComponent = () => {
  return (
    <div className="right_container">
      <div className="right_box">
        <div>
          <FilePresentIcon style={{ color: "white", fontSize: "50px" }} />
          <p>Presentation Design</p>
        </div>
        <p>
          {" "}
          Loreum ipsum dolor sit amet, consectuter adipiscing elit, sed do eius
          mod tempor incididunt...Loreum ipsum dolor sit amet
        </p>
      </div>
      <div className="right_box">
        <div>
          <VideoCameraBackIcon style={{ color: "white", fontSize: "50px" }} />
          <p>Audio - Visual Production</p>
        </div>
        <p>
          {" "}
          Loreum ipsum dolor sit amet, consectuter adipiscing elit, sed do eius
          mod tempor incididunt...Loreum ipsum dolor sit amet
        </p>
      </div>
      <div className="right_box">
        <div>
          <GTranslateIcon style={{ color: "white", fontSize: "50px" }} />
          <p>Translation Services</p>
        </div>
        <p>
          {" "}
          Loreum ipsum dolor sit amet, consectuter adipiscing elit, sed do eius
          mod tempor incididunt...Loreum ipsum dolor sit amet
        </p>
      </div>
      <div className="right_box">
        <div>
          <AssessmentIcon style={{ color: "white", fontSize: "50px" }} />
          <p>Graphic Design</p>
        </div>
        <p>
          {" "}
          Loreum ipsum dolor sit amet, consectuter adipiscing elit, sed do eius
          mod tempor incididunt...Loreum ipsum dolor sit amet
        </p>
      </div>
      <div className="right_box">
        <div>
          <TravelExploreIcon style={{ color: "white", fontSize: "50px" }} />
          <p>Research & Analytics</p>
        </div>
        <p>
          {" "}
          Loreum ipsum dolor sit amet, consectuter adipiscing elit, sed do eius
          mod tempor incididunt...Loreum ipsum dolor sit amet
        </p>
      </div>
      <div className="right_box">
        <div>
          <FolderZipIcon style={{ color: "white", fontSize: "50px" }} />
          <p>Data Processing</p>
        </div>
        <p>
          {" "}
          Loreum ipsum dolor sit amet, consectuter adipiscing elit, sed do eius
          mod tempor incididunt...Loreum ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
};

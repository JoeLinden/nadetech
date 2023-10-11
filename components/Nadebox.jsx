"use client";
import Image from "next/image";
import { useState } from "react";

function Nadebox({ thumbnail, alt, video, lineup, nade }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  //
  const handleMouseOver = () => {
    setIsPlaying(true);
  };
  const handleMouseOut = () => {
    setIsPlaying(false);
  };
  // Create a function that will open the modal with the video
  const handleClick = () => {
    console.log("clicked");
    setIsExpanded(!isExpanded);
  };

  function renderNadeboxNav(nade) {
    function checkSide(nade) {
      switch (nade.side) {
        case "t":
          return "T";
        case "ct":
          return (<Image 
            src="/assets/icons/de_inferno_icon.webp"
            alt="T"
            height={25}
            width={25}
            quality={100}
          />);
        default:
          return "ANY";
      }
    }
    function checkTechnique(nade) {
      switch (nade.technique) {
        case "left":
          return "Left";
        case "right":
          return "Right";
        case "middle":
          return "Middle";
        case "left-jump":
          return "Left Jump";
        case "right-jump":
          return "Right Jump";
        case "middle-jump":
          return "Middle Jump";
        default:
          return "left";
      }
    }
    function checkPro(nade) {
      switch (nade.pro) {
        case true:
          return "Pro";
        case false:
          return "Not Pro";
        default:
          return "Pro";
      }
    }
    return (
      <nav className="nadebox-nav">
        {checkSide(nade)} | {checkTechnique(nade)} | {checkPro(nade)}
      </nav>
    );
  }

  return (
    <div
      className="nadebox-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <header className="nadebox-header">
        <span className="nadebox-title">
          {nade.land} {nade.type} From {nade.origin}
        </span>
        {renderNadeboxNav(nade)}
      </header>
      <Image
        className={"nadebox-thumbnail"}
        src={thumbnail}
        alt={alt}
        fill={true}
        object-fit="contain"
        quality={100}
        priority
      />
      {isPlaying && (
        <video
          className={"nadebox-video"}
          src={video}
          muted={true}
          autoPlay={true}
          loop={true}
          controls={false}
        />
      )}
      <Image
        className="nadebox-lineup"
        src={lineup}
        alt="Lineup"
        height={80}
        width={116}
        quality={100}
      />
      {/* <footer className="nadebox-footer">
        Side: {nade.side} Precision, Click, Movement: {nade.movement} Technique:{" "}
        {nade.technique} Pro: {nade.pro} Collection?
      </footer> */}
    </div>
  );
}
export default Nadebox;

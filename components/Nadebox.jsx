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
          return (
            <Image
              src="/assets/icons/t.webp"
              alt="T"
              height={22}
              width={22}
              quality={100}
            />
          );
        case "ct":
          return (
            <Image
              src="/assets/icons/ct.webp"
              alt="T"
              height={22}
              width={22}
              quality={100}
            />
          );
        default:
          return (
            <Image
              src="/assets/icons/any.png"
              alt="T"
              height={22}
              width={22}
              quality={100}
            />
          );
      }
    }
    function checkTechnique(nade) {
      switch (nade.technique) {
        case "left":
          return (
            <Image
              className="tech"
              src="/assets/icons/left.svg"
              alt="T"
              height={21}
              width={21}
              quality={100}
            />
          );
        case "right":
          return (
            <Image
              className="tech"
              src="/assets/icons/right.svg"
              alt="T"
              height={21}
              width={21}
              quality={100}
            />
          );
        case "middle":
          return (
            <Image
              className="tech"
              src="/assets/icons/middle.svg"
              alt="T"
              height={21}
              width={21}
              quality={100}
            />
          );
        case "left-jump":
          return (
            <div>
              <Image
                className="tech"
                src="/assets/icons/left.svg"
                alt="T"
                height={21}
                width={21}
                quality={100}
              />
              <Image
                className="tech"
                src="/assets/icons/jump.svg"
                alt="T"
                height={21}
                width={21}
                quality={100}
              />
            </div>
          );
        case "right-jump":
          return (
            <div>
              <Image
                className="tech"
                src="/assets/icons/right.svg"
                alt="T"
                height={21}
                width={21}
                quality={100}
              />
              <Image
                className="tech"
                src="/assets/icons/jump.svg"
                alt="T"
                height={21}
                width={21}
                quality={100}
              />
            </div>
          );
        case "middle-jump":
          return (
            <div>
              <Image
                className="tech"
                src="/assets/icons/middle.svg"
                alt="T"
                height={21}
                width={21}
                quality={100}
              />
              <Image
                className="tech"
                src="/assets/icons/jump.svg"
                alt="T"
                height={21}
                width={21}
                quality={100}
              />
            </div>
          );
        default:
          return (
            <Image
              className="tech"
              src="/assets/icons/left.svg"
              alt="T"
              height={21}
              width={21}
              quality={100}
            />
          );
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
        {checkSide(nade)} {checkTechnique(nade)} {checkPro(nade)}
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

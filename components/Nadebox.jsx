"use client";
import Image from "next/image";
import Favorite from "./Favorite";

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
    function checkTechnique(nade) {
      switch (nade.technique) {
        case "left":
          return (
            <Image
              src="/assets/icons/left.svg"
              alt="T"
              height={21}
              width={18}
              quality={100}
            />
          );
        case "right":
          return (
            <Image
              src="/assets/icons/right.svg"
              alt="T"
              height={21}
              width={18}
              quality={100}
            />
          );
        case "middle":
          return (
            <Image
              src="/assets/icons/middle.svg"
              alt="T"
              height={21}
              width={18}
              quality={100}
            />
          );
        case "left-jump":
          return (
            <span className="nn-left-jump">
              <Image
                src="/assets/icons/left.svg"
                alt="T"
                height={21}
                width={18}
                quality={100}
              />
              <Image
                src="/assets/icons/jump.svg"
                alt="T"
                height={21}
                width={18}
                quality={100}
              />
            </span>
          );
        case "right-jump":
          return (
            <span>
              <Image
                src="/assets/icons/right.svg"
                alt="T"
                height={21}
                width={18}
                quality={100}
              />
              <Image
                src="/assets/icons/jump.svg"
                alt="T"
                height={21}
                width={18}
                quality={100}
              />
            </span>
          );
        case "middle-jump":
          return (
            <span>
              <Image
                src="/assets/icons/middle.svg"
                alt="T"
                height={21}
                width={18}
                quality={100}
              />
              <Image
                src="/assets/icons/jump.svg"
                alt="T"
                height={21}
                width={18}
                quality={100}
              />
            </span>
          );
        default:
          return (
            <Image
              src="/assets/icons/left.svg"
              alt="T"
              height={21}
              width={18}
              quality={100}
            />
          );
      }
    }
    return (
      <span className="nadebox-nav">
        {checkTechnique(nade)}
      </span>
    );
  }

  // TODO: Get the nade's ID after you finish migrating the database.
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
          <Favorite 
            videoID={nade.id}
          />
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

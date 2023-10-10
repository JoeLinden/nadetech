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

  return (
    <div
      className="nadebox-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <header className="nadebox-header">
        {nade.land} {nade.type}
        <br />
        From {nade.origin}
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
      <footer className="nadebox-footer">
        Side: {nade.side} Precision, Click, Movement: {nade.movement} Technique: {nade.technique} Pro: {nade.pro} Collection?
      </footer>
    </div>
  );
}
export default Nadebox;

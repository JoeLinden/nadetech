"use client";
import Image from "next/image";
import { useState } from "react";

function Nadebox({ thumbnail, alt, video, lineup }) {
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
      <header className="nadebox-header"></header>
      <Image
          className={"nadebox-thumbnail"}
          // Render null instead of an empty string if there is no thumbnail
          src={thumbnail}
          alt={alt}
          fill={true}
          object-fit="contain"
          quality={80}
          priority
      />
      {isPlaying && (
        <video
          className={"nadebox-video"}
          // Render null instead of an empty string if there is no video
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
        width={120}
        quality={80}
      />
      <footer className="nadebox-footer"></footer>
    </div>
  );
}
export default Nadebox;

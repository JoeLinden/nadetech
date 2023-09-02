"use client";
import Image from "next/image";
import { useState } from "react";

function Nadebox({ thumbnail, alt, video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  //
  const handleMouseOver = () => {
    setIsPlaying(true);
  };
  const handleMouseOut = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="nadebox-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <header className="nadebox-header"></header>
      {isPlaying ? (
        <video
          className={"nadebox-video"}
          src={video}
          muted={true}
          autoPlay={true}
          loop={true}
          controls={false}
        />
      ) : (
        <Image
          className={"nadebox-thumbnail"}
          src={thumbnail}
          alt={alt}
          fill={true}
          object-fit="contain"
          quality={100}
          priority
        />
      )}

      <footer className="nadebox-footer"></footer>
    </div>
  );
}
export default Nadebox;

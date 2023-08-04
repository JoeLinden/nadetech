"use client";
import Image from "next/image";

export default function Search() {
  return (
    <form className="top-nav-search-form" action="" role="search">
      <input type="text" name="query" id="query" />
      <button className="search-button" type="submit">
        <Image
          src="assets/vercel.svg"
          alt="Search icon"
          width={24}
          height={24}
          className="search-button-icon"
        />
      </button>
    </form>
  );
}

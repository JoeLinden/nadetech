"use client";
import Image from "next/image";

export default function Search({ onType }) {
  return (
    <form className="top-nav-search-form" action="" role="search">
      <input
        type="text"
        placeholder="Search"
        name="query"
        id="query"
        className="search-input"
        onChange={onType}
      />
      <button className="search-button" type="submit">
        <Image
          src="assets/search_400_24dp.svg"
          alt="Search icon"
          width={24}
          height={24}
          className="search-button-icon"
        />
      </button>
    </form>
  );
}

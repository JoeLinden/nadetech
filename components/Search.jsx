"use client";
import Image from "next/image";

export default function Search({ onType }) {
  return (
    <form className="top-nav-search-form" action="" role="search">
      <input
        type="search"
        placeholder="Search"
        name="query"
        id="query"
        className="search-input"
        onChange={onType}
      />
      {/* Obey Filters Toggle */}
      <button className="search-button" type="toggle">
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

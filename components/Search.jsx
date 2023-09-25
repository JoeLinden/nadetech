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
    </form>
  );
}

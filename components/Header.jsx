import Search from "./Search";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Header({
  onType,
  mapOptions,
  collectionOptions,
  onMapSelect,
  onCollectionSelect,
}) {
  const handleSortSelect = (sort) => {
    console.log("", sort);
  };

  return (
    <header className="split-header">
      <Dropdown
        title="Maps"
        options={mapOptions}
        multiSelect={true}
        onSelect={onMapSelect}
        className="maps-dropdown"
      />
      <Search onType={onType} />
      <Dropdown
        title="Collections"
        options={collectionOptions}
        multiSelect={true}
        onSelect={onCollectionSelect}
        className="collections-dropdown"
      />
    </header>
  );
}

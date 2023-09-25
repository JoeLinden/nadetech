import Search from "./Search";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Header({ onType, mapOptions, handleMapSelect }) {
    const collectionOptions = ['Essentials', 'Retake', 'One-Way', 'Lurk', 'Cross-Map', '+ Add Your Own'];
    const [selectedCollections, setSelectedCollections] = useState([...collectionOptions]);
    
    const handleCollectionSelect = (collection) => {
        console.log("", collection);
    }
    
    const handleSortSelect = (sort) => {
        console.log("", sort);
    }

  return (
    <header className="split-header">
      <Dropdown 
        title="Maps"
        options={mapOptions}
        multiSelect={true}
        onSelect={handleMapSelect}
      />
      <Search onType={onType} />
      <Dropdown 
        title="Collections"
        options={collectionOptions}
        multiSelect={false}
        onSelect={handleCollectionSelect}
      />
      <Dropdown 
        title="Sort"
        options={['Top', 'New']}
        multiSelect={false}
        onSelect={handleSortSelect}
      />
    </header>
  );
}

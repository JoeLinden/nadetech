"use client";
import Header from "/components/Header";
import Sidebar from "/components/Sidebar";
import Content from "/components/Content";
import SidebarData from "./SidebarData.js";
import { useState } from "react";
import { Nades } from "./Nades.js";

const alias = {
  molotov: "molly",
  incendiary: "molly",
  inc: "molly",
  he: "grenade",
  headshot: "barrels"
};
function translateQuery(query) {
  return alias[query.toLowerCase()] || query;
}

export default function Split() {
  const [query, setQuery] = useState("");
  const [sidebar, setSidebar] = useState(SidebarData);
  const mapOptions = ["ancient", "anubis", "inferno", "mirage", "nuke", "overpass", "vertigo"];
  const [selectedMaps, setSelectedMaps] = useState([...mapOptions]);

  // Sidebar onClick Handler
  function handleClick(index) {
    const nextSidebar = sidebar.map((button, i) => {
      // Only modify the clicked button
      if (i !== index) {
        return button;
      }

      if (button.state === true) {
        return { ...button, state: false };
      } else if (button.state === false) {
        return { ...button, state: true };
      } else if (button.state === "any") {
        return { ...button, state: "128" };
      } else if (button.state === "128") {
        return { ...button, state: "64" };
      } else if (button.state === "64") {
        return { ...button, state: "any" };
      } else {
        console.log("Button State Not Found");
        return button;
      }
    });
    setSidebar(nextSidebar);
  }

  // Search Filter
  const search = (nades) => {
    return nades.filter(
      (nade) =>
        nade.title.toLowerCase().includes(query) ||
        nade.land.toLowerCase().includes(query) ||
        nade.type.toLowerCase().includes(query) ||
        nade.type.includes(translateQuery(query)) || // aliases
        nade.map.toLowerCase().includes(query)
    );
  };

  // Sidebar Filter
  const results = (nades) => {
    return nades.filter((nade) =>
      sidebar.some(
        ({ type, state, side, tick }) => type === nade.type && state != false
      )
    );
  };

  const handleMapSelect = (map) => {
    setSelectedMaps((prevSelectedMaps) => {
      if (prevSelectedMaps.includes(map)) {
        // Deselect the map
        return prevSelectedMaps.filter((m) => m !== map);
      } else {
        // Select the map
        return [...prevSelectedMaps, map];
      }
    })
    console.log("Previous Selected maps: ", selectedMaps);
  }

  const filterMaps = (nades) => {
    return nades.filter((nade) => 
      selectedMaps.includes(nade.map)
      // selectedMaps.find((map) => map === nade.map)
    )
  }

  return (
    <div className="split">
      <Header handleMapSelect={handleMapSelect} mapOptions={mapOptions} onType={(e) => setQuery(e.target.value)} />
      <Sidebar onClick={handleClick} sidebarData={sidebar} />
      <Content results={filterMaps(search(results(Nades)))} />
    </div>
  );
}

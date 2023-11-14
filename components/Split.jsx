"use client";
import Header from "/components/Header";
import Sidebar from "/components/Sidebar";
import Content from "/components/Content";
import SidebarData from "./SidebarData.js";
import { useState } from "react";
import { Nades } from "./nades.js";
import { fetchVideos } from "@/data.js";
// const db = new sqlite3.Database("./database.sqlite", (err) => {
//   if (err) return console.error(err.message);
// });

// const { db } = require('./db');
//import { db } from './db';

const nades = await fetchVideos();

const alias = {
  molotov: "molly",
  incendiary: "molly",
  inc: "molly",
  he: "grenade",
};
const mapOptions = [
  "ancient",
  "anubis",
  "inferno",
  "mirage",
  "nuke",
  "overpass",
  "vertigo",
];
const collectionOptions = [
  "essential",
  "retake",
  "one-way",
  "lurk",
  "cross-map",
];

// Nade aliases
function translateQuery(query) {
  return alias[query.toLowerCase()] || query;
}

export default function Split() {
  const [query, setQuery] = useState("");
  const [sidebar, setSidebar] = useState(SidebarData);
  const [selectedMaps, setSelectedMaps] = useState([...mapOptions]);
  const [selectedCollections, setSelectedCollections] = useState([
    ...collectionOptions,
  ]);

  // EVENT HANDLERS ===========================================
  function handleClick(index) {
    const nextSidebar = sidebar.map((button, i) => {
      // Only modify the clicked button
      if (i !== index) {
        return button;
      }

      // Toggle button state
      if (button.state === true) {
        return { ...button, state: false };
      } else if (button.state === false) {
        return { ...button, state: true };
        // Cycle button state
      } else if (button.state === "any") {
        return { ...button, state: "ct" };
      } else if (button.state === "ct") {
        return { ...button, state: "t" };
      } else if (button.state === "t") {
        return { ...button, state: "any" };
      } else {
        return button;
      }
    });
    setSidebar(nextSidebar);
  }

  const handleMapSelect = (map) => {
    setSelectedMaps((prevSelectedMaps) => {
      if (prevSelectedMaps.includes(map)) {
        // Deselect the map
        return prevSelectedMaps.filter((m) => m !== map);
      } else {
        // Select the map
        return [...prevSelectedMaps, map];
      }
    });
  };

  const handleCollectionSelect = (collection) => {
    setSelectedCollections((prevSelectedCollections) => {
      if (prevSelectedCollections.includes(collection)) {
        // Deselect the collection
        return prevSelectedCollections.filter((c) => c !== collection);
      } else {
        // Select the collection
        return [...prevSelectedCollections, collection];
      }
    });
  };

  // FILTERS ============================== ~1ms processing time
  const searchFilter = (nades) => {
    return nades.filter(
      (nade) =>
        nade.alt.toLowerCase().includes(query) 
        || nade.finish.toLowerCase().includes(query) 
        || nade.type.toLowerCase().includes(query)
        || nade.map.toLowerCase().includes(query) 
        || nade.zone.toLowerCase().includes(query)
        || nade.type.includes(translateQuery(query)) // nade type aliases 
    );
  };

  const sidebarFilter = (nades) => {
    return nades.filter((nade) =>
      sidebar.some(
        ({ type, state }) =>
          // Type Filter | Filter out nade types if the respective button is false
          type === nade.type 
          && state !== false
          // Side Filter | Filter CT, T, or Any side from results
          && (sidebar[7].state === nade.team || sidebar[7].state === "any")
          // Pro Filter  | Only show pro nades if the button is enabled, otherwise show everything
          && (sidebar[8].state === nade.pro || nade.pro === 1)
      )
    );
  };

  const mapFilter = (nades) => {
    return nades.filter((nade) => selectedMaps.includes(nade.map));
  };

  const collectionFilter = (nades) => {
    return nades.filter((nade) => selectedCollections.includes(nade.collection)
    );
  };

  return (
    <div className="split">
      <Header
        onMapSelect={handleMapSelect}
        mapOptions={mapOptions}
        onCollectionSelect={handleCollectionSelect}
        collectionOptions={collectionOptions}
        onType={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Sidebar onClick={handleClick} sidebarData={sidebar} />
      <Content
        results={mapFilter(collectionFilter(sidebarFilter(searchFilter(nades))))}
      />
      {/* <Content
        results={mapFilter(collectionFilter(sidebarFilter(searchFilter(Nades))))}
      /> */}
    </div>
  );
}
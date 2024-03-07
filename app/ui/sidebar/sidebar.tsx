"use client";
import { useState } from "react";
import { Fragment } from "react";

const maps = [
  { name: "Inferno" },
  { name: "Mirage" },
  { name: "Nuke" },
  { name: "Overpass" },
  { name: "Ancient" },
  { name: "Vertigo" },
  { name: "Anubis" },
];
const nades = [
  { name: "Smokes" },
  { name: "Flashbangs" },
  { name: "Molotovs" },
  { name: "Grenades" },
];
const options = [{ name: "Favorites" }];
const collections = [{ name: "Essentials" }];
const teams = [
  { name: "Any" },
  { name: "Terrorists" },
  { name: "Counter-Terrorists" },
];

function mapObjects(filters: Array<{ name: string }>, category: string) {
  return (
    <Fragment>
      <h1 className="sidebar-label">{category}</h1>
      {/* Map a filter category to the sidebar */}
      {filters.map((filter) => {
        return <h2 key={filter.name}>{filter.name}</h2>;
      })}
      <br />
    </Fragment>
  );
}

export default function SideBar() {
  return (
    <aside className="sidebar">
      {mapObjects(options, "Options")}
      {mapObjects(nades, "Nades")}
      {mapObjects(maps, "Maps")}
      {mapObjects(teams, "Teams")}
    </aside>
  );
}

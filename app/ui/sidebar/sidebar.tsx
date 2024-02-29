"use client";
import { useState } from "react";

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
const teams = ["Any", "Terrorists", "Counter-Terrorists"];

export default function SideBar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-label">Options</h1>
      <br />
      <h1 className="sidebar-label">Nades</h1>
      <br />
      <h1 className="sidebar-label">Maps</h1>
      <br />
    </aside>
  );
}

"use client";
import { useState } from "react";
import { options, nades, maps, teams } from "@/app/lib/sidebar-data";
import { SidebarData } from "@/app/lib/definitions";

function mapSidebar(filters: Array<SidebarData>, category: string) {
  return (
    <div className="sidebar-section">
      <h1 className="sidebar-label">{category}</h1>
      {/* Map a filter category to the sidebar */}
      {filters.map((filter) => {
        return (
          <button className="sidebar-button" key={filter.name}>
            {filter.name}
          </button>
        );
      })}
      <br />
    </div>
  );
}

export default function SideBar() {
  return (
    <aside className="sidebar">
      {mapSidebar(options, "Options")}
      {mapSidebar(nades, "Nades")}
      {mapSidebar(maps, "Maps")}
      {mapSidebar(teams, "Teams")}
    </aside>
  );
}

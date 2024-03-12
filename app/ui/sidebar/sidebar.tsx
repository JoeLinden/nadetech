"use client";
import { useState } from "react";
import {
  options,
  nades,
  maps,
  teams,
  sidebarFilters,
} from "@/app/lib/sidebar-data";
import Toggle from "@/app/ui/toggle";
import { SidebarData } from "@/app/lib/definitions";

function mapSidebar(filters: Array<SidebarData>, category: string) {
  return (
    <div className="sidebar-section">
      <h1 className="sidebar-label">{category}</h1>
      {/* Map each filter option to the sidebar */}
      {/* TODO: Do you have to redraw the entire sidebar? */}
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
  // Sidebar state variable
  const [filters, setFilters] = useState(sidebarFilters);

  // Toggle the filter state
  const handleToggleFilter = (category: string, filter: string) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [filter]: !prevFilters[category][filter],
      },
    }));
  };

  // Re-render the sidebar buttons on toggle with their updated state
  return (
    <aside className="sidebar">
      {Object.entries(filters).map(([category, filter]) => (
        <div key={category} className="sidebar-section">
          <h1 className="sidebar-label">{category}</h1>
          {Object.entries(filter).map(([filterName, isActive]) => (
            <Toggle
              key={filterName}
              label={filterName}
              isOn={isActive}
              onToggle={() => handleToggleFilter(category, filterName)}
            />
          ))}
        </div>
      ))}
    </aside>
  );
}

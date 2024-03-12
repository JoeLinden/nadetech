export const maps = [
  { name: "Nuke", state: true },
  { name: "Anubis", state: true },
  { name: "Mirage", state: true },
  { name: "Ancient", state: true },
  { name: "Inferno", state: true },
  { name: "Vertigo", state: true },
  { name: "Overpass", state: true },
];

export const nades = [
  { name: "Smokes", state: true },
  { name: "Molotovs", state: true },
  { name: "Flashbangs", state: true },
  { name: "HE Grenades", state: true },
];
export const options = [{ name: "Favorites", state: false }];

export const collections = [
  { name: "All", state: true },
  { name: "Retake", state: false },
  { name: "Cross-Map", state: false },
  { name: "Essentials", state: false },
];

export const teams = [
  { name: "Any", state: true },
  { name: "Terrorists", state: false },
  { name: "Counter-Terrorists", state: false },
];

export const sidebarFilters = {
  Options: {
    Favorites: false,
  },
  Nades: {
    Smokes: true,
    Grenades: true,
    Molotovs: true,
    Flashbangs: true,
  },
  Maps: {
    Ancient: true,
    Anubis: true,
    Inferno: true,
    Mirage: true,
    Nuke: true,
    Overpass: true,
    Vertigo: true,
  },
  Teams: {
    Any: true,
    Terrorists: false,
    CounterTerrorists: false,
  },
};

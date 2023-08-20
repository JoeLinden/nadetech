import Nadebox from "/components/Nadebox";
import { nade } from "./nades.js";

// Map an array of JSX Nadeboxes and pass every prop from the original nade object
const nades = nade.map(nade => 
  <Nadebox {...nade} key={nade.id} />
);

export default function Content() {
  return (
    <div className="split-content">{nades}</div>
  );
}

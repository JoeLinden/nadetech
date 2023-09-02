import Nadebox from "/components/Nadebox";
import { Nades } from "./Nades.js";

export default function Content({ query }) {
  return (
    <div className="split-content">
      {Nades.filter(nade => nade.title.toLowerCase().includes(query)).map((nade) => (
        <Nadebox {...nade} key={nade.id} />
      ))}
    </div>
  );
}

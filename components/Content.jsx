import Nadebox from "/components/Nadebox";

// Filter
export default function Content({ results }) {
  return (
    <div className="split-content">
      {results.map((nade) => (
        <Nadebox {...nade} key={nade.id} />
      ))}
    </div>
  );
}

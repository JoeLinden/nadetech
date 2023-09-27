import Nadebox from "/components/Nadebox";

// Filter
export default function Content({ results }) {
  return (
    <div className="split-content">
      {results.length < 1 
      ? (<h1>No Nades Found</h1>) 
      : (results.map((nade) => <Nadebox {...nade} key={nade.id} />))}
    </div>
  );
}

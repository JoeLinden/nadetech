import Nadebox from "/components/Nadebox";
import { useState, useEffect } from 'react';

// Filter
export default function Content({ results }) {
  // const [results, setResults] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchFilteredNades = async () => {
  //     setLoading(true);
  //     try {
  //       const filteredNades = await searchFilter(query);
  //       setResults(filteredNades);
  //     } catch (error) {
  //       console.log("Failed to fetch nades:", error);
  //       setResults([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (query) {
  //     fetchFilteredNades();
  //   }

  // }
  return (
    <div className="split-content">
      {results.length < 1 
      ? (<h1>No Nades Found</h1>) 
      : (results.map((nade) => <Nadebox {...nade} key={nade.id} nade={nade}/>))}
    </div>
  );
}

import { useState } from "react";
import { Navbar } from "./StarWar/Navbar";
import { People } from "./StarWar/People";
import { Planets } from "./StarWar/Planets";

export const StarWarPage = () => {
  const [page, setPage] = useState('planets')

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

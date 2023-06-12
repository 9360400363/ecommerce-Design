import React from "react";
import Cards from "../components/cards";

function Home() {
  return (
    <div>
      <div className="flex my-12">
        {" "}
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default Home;

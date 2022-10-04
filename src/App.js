import React from "react";
import Skeleton from "./components/PersonnelBlock/Skeleton";


function App() {
  return (
    <>
      <h1>Hello World!</h1>
      { [...new Array(6)].map(() => {
        return <div><Skeleton /></div>;
      }) }
    </>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="dark bg-gradient-to-tl from-slate-300 to-slate-500 text-neutral-200 min-h-screen">
      <div className="headercontainer container mx-auto p-4">
        <Header />
      </div>
    </div>
  );
};

export default App;

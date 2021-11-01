import Datatable from "components/Datatable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;

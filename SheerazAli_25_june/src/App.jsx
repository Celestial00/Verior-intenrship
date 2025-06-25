import React from "react";
import Navbar from "./components/Navbar.jsx";
import TodoContainer from "./components/TodoContainer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <TodoContainer />
      </main>
    </>
  );
}

export default App;

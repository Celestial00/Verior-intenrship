import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <>
      <Router basename="/Verior-intenrship">
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/Quiz" element={<Quiz/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

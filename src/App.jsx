import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./HOME/Home";
import About from "./ABOUT/About";
import Todo from "./TODO/Todo";
import Header from "./COMPONENT/Header";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}


export default App;

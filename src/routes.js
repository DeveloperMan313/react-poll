import { Routes, Route, BrowserRouter } from "react-router-dom";

import Index from "./components/Index";
import About from "./components/About";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;

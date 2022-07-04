import { Routes, Route, BrowserRouter } from "react-router-dom";

import Index from "./components/Index";
import CreatePoll from "./components/CreatePoll";
import About from "./components/About";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;

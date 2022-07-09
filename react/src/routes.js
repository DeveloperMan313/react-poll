import { Routes, Route, BrowserRouter } from "react-router-dom";

import Index from "./components/Index";
import CreatePoll from "./components/CreatePoll";
import About from "./components/About";
import Signup from "./components/Signup";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;

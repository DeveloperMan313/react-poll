import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./routes";

const root = createRoot(document.getElementById("root"));
root.render(<Main />);

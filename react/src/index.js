import { createRoot } from "react-dom/client";
import Main from "./routes";
import "./styles/css/combined.css";

const root = createRoot(document.getElementById("root"));
root.render(<Main />);

import {createRoot} from "react-dom/client";
import { App } from "./App";
import './index.css';

const app = document.getElementById("app");


createRoot(app).render(<App />);
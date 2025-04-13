import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app";

const rootElement = createRoot(document.getElementById("root")!)
 
rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);

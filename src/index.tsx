import { StrictMode } from "react"

import { App } from "@/app"
import { createRoot } from "react-dom/client"

const rootElement = createRoot(document.getElementById("root")!)

rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

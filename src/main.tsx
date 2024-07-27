// Modules
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import type { Container } from "react-dom/client";

// Styles
import "styles/app.styles.css";

// Components
import { AppRouter } from "components/app-router";

// Create Root
const app = createRoot(document.getElementById("root") as Container);

// Render
app.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

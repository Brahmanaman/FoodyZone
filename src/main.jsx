import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 !important;
    padding: 0 !important; 
    box-sizing: border-box;
  }
`;

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <App />
  </>
);

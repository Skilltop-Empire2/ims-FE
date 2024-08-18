import React from "react";
import { SignedInProvider } from "./contexts/sign-in.contexts";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SignedInProvider>
        <App />
      </SignedInProvider>
    </BrowserRouter>
  </React.StrictMode>
);

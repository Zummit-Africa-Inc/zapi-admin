import "./init";
import React from "react";
import { Amplify } from "aws-amplify";
import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import App from "./App";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";

const vite_identity_url = import.meta.env.VITE_IDENTITY_URL;
const vite_core_url = import.meta.env.VITE_CORE_URL;
const cookies = new Cookies();

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "VITE_IDENTITY_URL",
        endpoint: vite_identity_url,
      },
      {
        name: "VITE_CORE_URL",
        endpoint: vite_core_url,
        custom_header: async () => {
          return {
            "X-Zapi-Auth-Token": `Bearer ${cookies.get("admin-token")}`,
          };
        },
      },
    ],
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

import { TolgeeProvider } from "@tolgee/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TolgeeProvider
      apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
      apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
      loadingFallback={<>Loading...</>}
      >
        <App />
      </TolgeeProvider>
  </StrictMode>
);

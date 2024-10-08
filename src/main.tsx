import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { QueryClient, QueryClientProvider } from "react-query";
// import { Auth0Provider } from "@auth0/auth0-react";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Auth0Provider
      clientId="GJUdY6pPmNiA6wguiSVppcfFeGKIWQYf"
      domain="dev-qpyxn3hwex8y8psi.us.auth0.com"
    > */}
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

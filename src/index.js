import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import "react-photo-view/dist/react-photo-view.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./style.css"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);

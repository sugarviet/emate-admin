import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import './index.css'
// import { CloudinaryContext } from 'cloudinary-react';

const queryClient = new QueryClient();

// const cloudName = "digjzzh2e"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      {/* <CloudinaryContext cloudName={cloudName}> */}
          <App />
      {/* </CloudinaryContext> */}
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
)

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store.jsx';
import ReactDOM from 'react-dom';
const root = createRoot(document.getElementById('root'));
import { GridProvider } from './components/LivePage/GridContext.jsx';
import { LayoutProvider } from './components/LivePage/LayoutContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();


root.render(
  <LayoutProvider>
  <GridProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
          transition:Bounce />
        <QueryClientProvider client={queryClient}>
          <App />
            </QueryClientProvider>
          </PersistGate>
    </Provider>
    </GridProvider>
    </LayoutProvider>
);



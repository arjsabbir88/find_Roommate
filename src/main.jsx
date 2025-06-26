import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { Router } from './Router/Router.jsx'
import { AuthProvider } from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)

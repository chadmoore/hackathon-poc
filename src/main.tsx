import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './qlik-override.css'
import App from './App.tsx'
import OAuthCallback from './components/OAuthCallback.tsx'

// Check if we're on the callback path and use the OAuthCallback component
const path = window.location.pathname;
if (path === '/auth/callback') {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <OAuthCallback />
    </StrictMode>
  );
} else {
  // Normal app rendering for all other routes
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
}

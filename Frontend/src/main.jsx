import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "./components/ui/sonner"
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ui/provideTheme.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    <Toaster />
    </ThemeProvider>
    
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './AuthContext.jsx'
import flagsmith from 'flagsmith'
import {FlagsmithProvider} from 'flagsmith/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <FlagsmithProvider 
    options={{environmentID: 'kdM3Aw6zL9jPuMvT9sPz4q'}}
    flagsmith={flagsmith}
    >
    <AuthProvider>
    <App />
    </AuthProvider>
    </FlagsmithProvider>
    </BrowserRouter>
  </StrictMode>,
)

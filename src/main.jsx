import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ListaProvider } from './contexts/ListaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaProvider>
      <App />
    </ListaProvider>
  </StrictMode>,
)

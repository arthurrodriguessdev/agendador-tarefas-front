import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../src/style/global.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
)

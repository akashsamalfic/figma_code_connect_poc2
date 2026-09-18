import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ASCScreen } from '@/pages/ASCScreen'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element #root not found')
}

createRoot(rootEl).render(
  <StrictMode>
    <ASCScreen />
  </StrictMode>,
)

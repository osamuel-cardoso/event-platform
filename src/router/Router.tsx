import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Event } from '../pages/Event'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Event />} />
      </Routes>
    </BrowserRouter>
  )
}

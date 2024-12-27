import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Song_card from './components/recommend_songs/song.jsx'
import Menu from './components/menu/menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)

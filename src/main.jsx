import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
//renderizar toda la app
createRoot(document.getElementById('root')).render(
  //se ejecuta 2 veces para asegurar que todo sea correcto
 <BrowserRouter>
 <App />
 </BrowserRouter>
)

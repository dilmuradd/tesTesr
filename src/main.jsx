import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './page/header/header.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ScrollProvider } from './Context/ScrollContext.jsx'
import { BasketProvider } from './Context/Basket.jsx'
import { AuthProvider } from './Context/Auth.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div className='max-w-[1700px] m-[auto]'>

    <BrowserRouter>
      <ScrollProvider>
        <BasketProvider>
          <AuthProvider>
                       <App />
          </AuthProvider>
        </BasketProvider>
      </ScrollProvider>
    </BrowserRouter>
  </div>
)

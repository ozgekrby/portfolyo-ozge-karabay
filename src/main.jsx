import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import myStore from './redux/store/index.js'

createRoot(document.getElementById('root')).render(
    <Provider store={myStore}>
    <App />
    </Provider>
)

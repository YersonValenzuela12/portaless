import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {Routings} from './Routing'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<App />*/}
    <Routings />
  </React.StrictMode>,
)

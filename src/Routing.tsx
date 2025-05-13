import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Abouts from './pages/about';
import Servicies from './pages/servicies';
import Contacto from './pages/contact';
import { Route, Routes as Routers } from 'react-router-dom';


export const Routings = () => {
  return (
    <div>
      <BrowserRouter>

     <hr/>
<nav>
    <ol>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>Somos</Link></li>
        <li><Link to='/Servicies'>Servicios</Link></li>
        <li><Link to='/contacto'>Contacto</Link></li>
    </ol>
</nav>
<Routers>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<Abouts/>}/>
    <Route path='/Servicies' element={<Servicies/>}/>
    <Route path='/contacto' element={<Contacto/>}/>
</Routers>
      

      </BrowserRouter>


    </div>
  )
}

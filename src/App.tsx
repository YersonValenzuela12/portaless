import './App.css'
import './index.css';
import header from './component/header';
import ProductCard from './component/ProductCard';
import DataProducts from './component/DataProducts';
import Login  from './pages/login';


function App() { 
 
  return (
  <div>
   
  
   
    <h1 className="  center text-3xl font-bold underline" >Un portal de ess hecho en react </h1>
    <header></header> 


    <section className='grid grid-cols-6 gap-6 md:grid-cols-6 lg:grid-col-6 justify-item-center'>
      <ProductCard></ProductCard>

    </section>

    <section className='grid grid-cols-4 gap-4 md:grid-cols-2 lg:grid-col-4 justify-item-center'> 
    <DataProducts></DataProducts>

    </section>

    
    
    <section className='grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-col-1 justify-item-center'>
 
     <Login></Login>
    </section>
    




  </div>
  );
}
export default App

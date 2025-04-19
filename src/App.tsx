import { useState } from 'react';
import './App.css'
import './index.css';
import ProductCard from './component/ProductCard';
import DataProducts from './component/DataProducts';



function App() { 
   const [allProducts,setAllProducts] = useState([]);
  return (
  <div>
   
   <header></header> 
  
    <h1 className="  center text-3xl font-bold underline" >Un portal de ess hecho en react </h1>
    <section className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-col-4 justify-item-center'>
      <ProductCard></ProductCard>
       <button></button>
      <DataProducts></DataProducts>
   
    </section>
   
  </div>
  );
}
export default App

import './App.css'
import './index.css';
import Log from './component/log/index.jsx';
import ProductCard from './component/ProductCard';
import DataProducts from './component/DataProducts';
import Login  from './pages/login';
import Footer from './component/footer/footer.jsx';

function App() { 
 
  return (
  <div>
   
  
   <section className='grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-col-1 justify-item-center'>
    <Log></Log> 
    </section>

    <h1 className="  center text-3xl font-bold underline" >Un portal de ess hecho en react </h1>

    


    <section className='grid grid-cols-6 gap-6 md:grid-cols-6 lg:grid-col-6 justify-item-center'>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </section>

    <section className='grid justify-item-center'> 
    <DataProducts></DataProducts>

    </section>

    
    
    <section className='grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-col-1 justify-item-center'>
 
     <Login></Login>
    </section>
    
    <section className='grid grid-cols-1'>
      <Footer></Footer>
    </section>



  </div>
  );
}
export default App

import './App.css'
import '../index.css';
import Log from '../component/log/index.tsx';
import ProductCard from '../component/ProductCard/index.tsx';
import DataProducts from '../component/DataProducts/index.tsx';
import Login  from './login.tsx';
import Footer from '../component/footer/footer.tsx';
import Slaider from '../component/slider/index.tsx';
function Home() { 
 
  return (
  <div>

<section className='grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-col-1 justify-item-center'>
  <Log></Log>
  </section>


  
<section className='grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-col-1 justify-item-center'>
<Slaider></Slaider>
</section>
    


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
export default Home

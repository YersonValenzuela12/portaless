import './App.css'
import ProductCard from './component/ProductCard';


function App() { 

  return (
  <div>
    <h1>Un portal de ess hecho en react </h1>
    <section className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-col-4 justify-item-center'>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </section>
  </div>
  );
}
export default App

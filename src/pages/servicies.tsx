import Slaider2 from '../component/slider/index.tsx';
import Footer from '../component/footer/footer.tsx';
export const Servicies = () => {
  return (
    <div>
    
      <h1>servicies</h1>

<section className='grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-col-1 justify-item-center'>
<Slaider2></Slaider2>
</section>
      <section className='grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-col-1 justify-item-center'>
        <Footer></Footer>
        </section>
    </div>
  );
}
export default Servicies;

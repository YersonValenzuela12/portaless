
import Login from './login.tsx';
import Footer from '../component/footer/footer.tsx';
  const Contacto = () => {
  return (
    <div>
      <section>
        <Login></Login>
      </section>
    
    
      <section className='grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-col-1 justify-item-center'>
        <Footer></Footer>
        </section>
    </div>
  );
}
export default Contacto;
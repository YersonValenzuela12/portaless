
import Footer from '../component/footer/footer.tsx';
 const Abouts = () => {
  return (

    <div>
      <h1>about</h1>
   <section>
        <h1>Somos</h1>
        <p>En Telecomunicaciones Valenzuela, somos una empresa dedicada a brindar soluciones integrales en telecomunicaciones y tecnología. Con más de 10 años de experiencia en el sector, nos especializamos en la instalación y mantenimiento de sistemas de seguridad, redes de datos y telefonía, así como en la venta de equipos y accesorios de última generación.</p>
        <p>Nuestro equipo de profesionales altamente capacitados está comprometido en ofrecer un servicio personalizado y de calidad, adaptándose a las necesidades específicas de cada cliente. Trabajamos con las mejores marcas del mercado para garantizar la satisfacción y confianza de nuestros usuarios.</p>
      </section>
    
    
      <section className='grid grid-cols-1 gap-1 md:grid-cols-1 lg:grid-col-1 justify-item-center'>
        <Footer></Footer>
        </section>
    </div>
  );
}
export default Abouts;
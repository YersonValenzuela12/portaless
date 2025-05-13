
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="s_footer section-padding">

    <hr/>
        <div className="s_footer-below">
            <div className="footer_copyrigth">
                <p>
                    @{new Date().getFullYear()} Yerson Valenzuela. All rights reserved.Selecom in. All rights reserved.
                </p>
            </div>
            <div className="s_footer-below-link">
                <a href="/Home"><div><p>Home</p></div></a>
                <a href="/About"><div><p>About</p></div></a>
                <a href="/services"><div><p>services</p></div></a>
                <a href="/contact"><div><p>contact</p></div></a>
                <a href="/term"><div><p>Terms & conditions</p></div></a>
            </div>
        </div>
    
      </div>
    </div>
  );
}
export default Footer;
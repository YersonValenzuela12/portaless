import React from "react";
import './footer.css';
import fb from '../../assets/facebook.png';
import git from '../../assets/git.png';  
import linkending from '../../assets/google.png';
const Footer = () => {
  return (
    <div className="footer">
      <div className="s_footer section-padding">
        <div className="s_footer-link">
        <div className="s_footer-link-div">
            <h4>For Business</h4>
            <a href="/employes">
                <p>Employes</p>
            </a>
            <a href="/healdplans">
                <p>health plans</p>
            </a>
            <a href="/individuals">
                <p>individuals</p>
            </a>

        </div>

        <div className="s_footer-link-div">
            <h4>Resourse</h4>
            <a href="/services">
                <p>Services</p>
            </a>
            <a href="/testimonials">
                <p>Testimonials</p>
            </a>
            <a href="/stv">
                <p>stv</p>
            </a>
            
        </div>
        <div className="s_footer-link-div">
            <h4>Company</h4>
            <a href="/home">
                <p>Home</p>
            </a>
            <a href="/about">
                <p>About</p>
            </a>
            <a href="/whatwedo">
                <p>What we Do</p>
            </a>
            <a href="/contact">
                <p>Contact</p>
            </a>

        </div>

        <div className="s_footer-link-div">
        <h4>Comi soon on</h4>
        <div className="socialmedia">
            <p><img src={fb} alt=""/></p>
            <p><img src={git} alt=""/></p>
            <p><img src={linkending} alt=""/></p>
        </div>
        </div>
        </div>
    <hr/>
        <div className="s_footer-below">
            <div className="footer_copyright">
                <p>
                    @{new Date().getFullYear()} Yerson Valenzuela. All rights reserved.Selecom in. All rights reserved.
                </p>
            </div>
            <div className="s_footer-below-link">
                <a href="/term"><div><p>Terms & conditions</p></div></a>
                <a href="/privacity"><div><p>Privacy Policy</p></div></a>
                <a href="/segurity"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>
    
      </div>
    </div>
  );
}
export default Footer;

    import React, { useState } from 'react'
    import './indexlog.css';

/*
    const menuItems = [
        {
          icons: <IoHomeOutline size={30} />,
          label: 'Home'
        },
        {
          icons: <FaProductHunt size={30} />,
          label: 'Products'
        },
        {
          icons: <MdOutlineDashboard size={30} />,
          label: 'Dashboard'
        },
        {
          icons: <CiSettings size={30} />,
          label: 'Setting'
        },
        {
          icons: <IoLogoBuffer size={30} />,
          label: 'Log'
        },
        {
          icons: <TbReportSearch size={30} />,
          label: 'Report'
        },
      ]*/
export const Log = ()=> {  
    
 
    return (
     <div className="s_nav">
          
      <div className="s_nav-below">
              <div className="nav_logo">
                  <p>
              
                  <img src={'src/assets/background.jpg'} width='150' height='100'></img>
                    
                  </p>
              </div>
              <div className="s_nav-below-link">
                  <a href="/home" ><div><p>Home</p></div></a>
                  <a href="/about" ><div><p>About</p></div></a>
                  <a href="/service" ><div><p>Services</p></div></a>
                  <a href="/contact" ><div><p>Contact</p></div></a>
              </div>
      
          </div>
          <hr></hr>
     </div>

       

);
    }
  export default Log;
    
import React from 'react';
import { Link , Outlet } from 'react-router-dom';

 const AboutUs = () => {
     
  return (
    <div>
        <h1>Aboute Us </h1>
        <Outlet />
        <ul>
            <li><Link to='Progeramers'>Progeramers</Link></li>
            <li><Link to='Drivers'>Drivers</Link></li>
        </ul>
              

    </div>
  )
}

export default AboutUs;

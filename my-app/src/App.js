import React, { Component } from 'react';
import { Route ,Routes, Navigate } from 'react-router-dom';
import Burger from './Component/Burger';
import Landing from './Component/Landing';
import Products from './Component/Products';
import Footer from './Component/Footer';
import AboutUs from './Component/AboutUs';
import DetailsPage from './Component/DetailsPage';
import Notfound from './Component/Notfound';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                
                <Burger />
                <Routes>
                      <Route path='/' element={<Landing />} />
                      <Route path='/Products/' element={<Products />} />
                      <Route path='/DetailsPage/:id' element={<DetailsPage />} />
                      <Route path='/AboutUs/*' element={<AboutUs />} >
                      <Route path='Progeramers' element={<h1>Progeramers</h1>} />
                       <Route path='Drivers' element={<h1>Drivers</h1>} />

                      </Route>
                      <Route path='/notfound/' element={<Notfound />} />
                      <Route path='/*' element={<Navigate to='/notfound' />} />
                  </Routes>
                <Footer /> 
            </div>
        )
    }
}

export default App;
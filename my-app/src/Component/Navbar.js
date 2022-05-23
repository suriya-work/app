import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";

 const Ul = styled.ul` 
 @media (max-width: 768px) {
     display: flex;
     flex-direction: column;
     justify-content: right;
     background:#1565df;
     z-index:15;
     transition: all .3s linear;
     transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"};
     padding-top : 3rem;
     padding-bottom: 3rem;
     position: fixed;
     top: 0;
     right: 0;

     li {
         font-size :14px;
     }
 }

 `;

 const Div = styled.div`
 @media (max-width : 768px) {
     display : none;
 }
 `


const Navbar = ({open}) => {
    return (
        <header className ={styles.header}>
            <div className ={styles.listContainer}>
                <Ul open ={open} className ={styles.list}>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/">Information</Link></li>
                </Ul>


            </div>
            <Div className = {styles.logo}>
                <img className= {styles.logo} src= {logo} alt='logo'/>
            </Div>
            
        </header>
    );
};

export default Navbar;
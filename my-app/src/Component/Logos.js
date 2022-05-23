import React from 'react';
import styles from './Logos.module.css'; 
import apple from '../images/iphone-logo-16.png';
import samsung from '../images/amsung.png';
import xiaomi from '../images/xiaomi.png';
import styled from 'styled-components';

const Div = styled.div`
@media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
}

`;

const Logos = (props) => {
    return (
        
        <div className={styles.container}> 
        <h3>Who support Us ?</h3>

        <Div>
            <img src= {apple} alt="logo" />
            <img src= {samsung} alt="logo" />
            <img src= {xiaomi} alt="logo" />
        </Div>

        </div>
    );
};

export default Logos;
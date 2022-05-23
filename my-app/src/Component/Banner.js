import React from 'react';
import styles from "./Banner.module.css";
import banner from '../images/glen.jpg';
import styled from 'styled-components';

const Div = styled.div`
@media (max-width: 968px) {
    img {
        max-width: 100%;
        height: 400px;
    } 
    h1 {
        font-size : 2rem;
    }
    p {
        font-size: 1.5rem;
    }


}
`;

const Banner = () => {
    return (
        <Div className= {styles.container}>
            <img src= {banner} alt="banner" />
            <div className= {styles.textContainer}>
                <h1>TYPE URL</h1>
                <p>
                    We` re learning <span>React.js</span>              
                </p>

            </div>
            
        </Div>
    );
};

export default Banner;
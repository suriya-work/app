import React, { Component } from 'react'
import Navbar from './Navbar';
import styled from 'styled-components';


const Div = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 20px;
left: 40rem;
z-index: 20;
display: none;
@media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
    
div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.open ? "#fff" : "#1565df"};
    border-radius: 5px;
    transform-origin: 1px;
    transition: all .3s linear;
    &:nth-child(1) {
        transform : ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
        transform : ${(props) => (props.open ? "translateX(-100%)" : "translateX(0)")};
        opacity: ${(props) => (props.open ? 0 : 1)}
    }
    &:nth-child(3) {
        transform : ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
    
}

`;

 class Burger extends Component {
     constructor () {
         super();
         this.state = {
             open : false,
         }
     }

     clickHandelr = () => {
         this.setState ({
             open: !this.state.open,
         })
     }

  render() {
    return (
        <>
        <Div open={this.state.open} onClick={this.clickHandelr}>
            <div></div>
            <div></div>
            <div></div>
        </Div>
        <Navbar open = {this.state.open} />

        </>
      
    )
  }
}

export default Burger;

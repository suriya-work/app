import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';
import iphonex from '../images/Iphone11.jpg';
import iphonexx from '../images/I11.jpg';
// import { Row, Col, Container} from "reactstrap";
import styled from 'styled-components';
const Div = styled.div`
@media (max-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-gap:20px;
        width: 500px;
        margin: 0 auto;
        padding: 20px;

        // max-width: 100%;
        // margin-left: 70px;  
        // display: flex;
        // flex-wrap: wrap;

}
`;







class Cards extends Component {
    constructor () {
        super();
        this.state = {
            PhoneData : [
                {id:1, image :iphonex, name:'iphonX', cost:'500 $'},
                {id:2, image :iphonexx, name:'iphon11',  cost:'400 $'},
                {id:3, image :iphonex, name:'iphonX',  cost:'300 $'},
                {id:4, image :iphonexx, name:'iphon11',  cost:'600 $'},
            
            
            ]
        }
    }

    render() {
        return (
             
                 
            <Div className={styles.container}>
                {/* <Card  id:,image ={iphonex} name='Iphone X'  cost='500 $' />
                <Card  id:,image ={iphonex} name='Iphone X'  cost='400 $' />
                <Card  id:,image ={iphonex} name='Iphone X'  cost='300 $' />
                <Card  id:,image ={iphonex} name='Iphone X'  cost='600 $' /> */}
                {this.state.PhoneData.map(phone =>
                 <Card 
                key={phone.id} 
                image ={phone.image}
                name ={phone.name}
                cost ={phone.cost} 
                id = {phone.id}/>
                )}

            </Div>
        );
    }
}

export default Cards;
import React, { Component } from 'react'; 
import styles from './Card.module.css';
import down from '../images/down.png';
import up from '../images/up.png';
import { Link } from 'react-router-dom';








class Card extends Component {

    constructor () {
        super();
        this.state = {
            cunter : 0
        }
    }  

    downHandelr = () => { 
        if (this.state.cunter >= 1) {
            this.setState (prevState => ({
                cunter : prevState.cunter - 1,
            }))
        }
       
    }  

    upHandelr = () => {
        this.setState (prevState => ({
            cunter : prevState.cunter + 1,

        }))
    }

    render() {

        const {image , name , cost , id} = this.props;
        const {cunter} = this.state
        return (
            <div className={styles.container}>
                <img src={image} alt="iphon" />
                <h3>
                    <Link to={`/DetailsPage/ ${id}`}>{name}</Link>
                </h3>
                <p>{cost} {cunter ? `* ${cunter} = ${cunter * Number(cost.split(" ")[0])} $` : ""}</p>

                <div className={styles.cunter}> 
                <img className={!cunter ? styles.deactive : ""} src= {down} alt="logo" onClick={this.downHandelr} />
                <span>{cunter}</span>
                <img src= {up} alt="logo" onClick={this.upHandelr} />

                </div>

            </div>
            
        );
    }
}

export default Card;
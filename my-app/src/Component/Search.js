import React, { Component } from 'react';
import styles from './Search.module.css';
// import styled from 'styled-components';


class Search extends Component { 
    constructor () {
        super ();
        this.state = {
            text : "",
        }
    }  

    changHandelr = event => {
        this.setState ({
            text : event.target.value,
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <p>Search what you want</p>
                <div>
                <input type="text" value={this.state.text} onChange={this.changHandelr} placeholder='Search ...' /> 
                <br />
                <br />
                <span>{this.state.text}</span>
                </div>

            </div>
            
        );
    }
}

export default Search;
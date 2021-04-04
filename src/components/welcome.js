import React from 'react';
import Header from './header';
import Store from '../components/store';
import Social from '../components/social';
import Message from "../components/message";
import Post from "../components/post";
import Product from "../components/product";
import Page from "./page-layout";

export default function Welcome(props) {
    const styles = {
        root: {
            display: "flex",
            flexDirection: "column",
            background: "LightGray",
            height: "100%",
            overflow: "hidden",
        },
    };
    return (
        <div style={styles.root}>
                <Header color="blue">
                    Welcome
                </Header>
                <div>
                    <p> Hello there! 
                    In our game, you will be asked to respond to a series of scenarios.
                    Some of these scenarios will be things that will be very familiar to you!</p>
                </div>
                <button 
                style={styles.bigButton}
                onClick={props.StartGame}
            > Start Game
            </button>

        </div>
    )
  }

import React from 'react';
import Phone from './phone';
import Header from './header';

export default function Social(props) {
    
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
        <Phone>
            <div style={styles.root}>
                <Header color="blue"></Header>
                <div>
                    {props.children}
                </div>
            </div>
        </Phone>
    )
  }


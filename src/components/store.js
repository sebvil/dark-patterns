import React from 'react';
import Header from './header.js';
import Phone from './phone.js';


export default function Store(props) {
    const BarStyling = {width:"14rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
    const styles = {
        root: {
            background: "white",
            height: "100%",
        },
        navContainer: {
            backgroundColor: "#2F4454",
            padding: "5px",
        },
        nav: {
            border: "none",
            padding: "0",
            listStyle: "none",
            margin: "0",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            whiteSpace: "nowrap",
        },
        a: {
            display: "block",
            paddingRight: "15px",
            paddingBottom: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            color: "#FCB900",
        }
    };
    
    return (
        <Phone>
        <div style={styles.root}>
            <Header color="#00004d"> Amacorp </Header>
            <div style={styles.navContainer}>
              <ul id="nav" style={styles.nav}>
                {/* <li style={NavStyle.li}><a href="#" style={NavStyle.a}>All</a></li> */}
                <li style={styles.li}><a href="#" style={styles.a}>Hole Foods</a></li>
                <li style={styles.li}><a href="#" style={styles.a}>Ama Video</a></li>
                <li style={styles.li}><a href="#" style={styles.a}>Customer Service</a></li>
              </ul>
                <input
                style={BarStyling}
                type="text"
                placeholder={"Search millions of items..."}
                />
            </div>
            <div>
            
            {props.children}
            </div>
        </div>
        </Phone>
        
    )
}
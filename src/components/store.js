import React from 'react';
import Header from './header.js';
import Phone from './phone.js';


export default function Store(props) {
    const BarStyling = {width:"14rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
    const NavStyle = {
        nav: {
        width: "75%",
        float: "left",
        border: "none",
        padding: "0",
        backgroundColor: "#2F4454",
        listStyle: "none",
        margin: "0 0 0 0",
        overflow: "hidden"
        },
        li: {
            float: "left"
        },
        a: {
            display: "block",
            padding: "3px 7px",
            textDecoration: "none",
            fontWeight: "bold",
            color: "#FCB900",
        }
    };
    
    return (
        <Phone>
        <div style={{background: "#2F4454"}}>
            <Header color="#00004d"> Amacorp </Header>
            <div>
              <ul id="nav" style={NavStyle.nav}>
                {/* <li style={NavStyle.li}><a href="#" style={NavStyle.a}>All</a></li> */}
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Hole Foods</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Ama Video</a></li>
                {/* <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Customer Service</a></li> */}
                {/* <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Pharmacy</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Household</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Fashion</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Electronics</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Lifestyle</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Healthy Living</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Pet Supplies</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Appliances</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Kids & More</a></li> */}
              </ul>
            <input
            style={BarStyling}
            type="text"
            placeholder={"Search millions of items..."}
            />
            </div>
            <div style={{color: "#FCB900"}}>
            
            {props.children}
            </div>
        </div>
        </Phone>
        
    )
}
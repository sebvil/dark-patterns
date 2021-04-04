import React from 'react';
// import Header from './header.js';


export default function Store(props) {
    const BarStyling = {width:"20rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
    const NavStyle = {
        nav: {
        width: "100%",
        float: "left",
        border: "none",
        padding: "0",
        backgroundColor: "#2F4454",
        listStyle: "none",
        margin: "0 0 3em 0"
        },
        li: {
            float: "left"
        },
        a: {
            display: "block",
            padding: "8px 15px",
            textDecoration: "none",
            fontWeight: "bold",
            color: "#FCB900",
            borderRight: "1px solid #ccc"
        }
    };
    
    return (
        <div style={{background: "#2F4454"}}>
            <div>
              <ul id="nav" style={NavStyle.nav}>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>All</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Hole Foods</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Amacorp Video</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Customer Service</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Pharmacy</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Household</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Fashion</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Electronics</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Lifestyle</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Healthy Living</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Pet Supplies</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Appliances</a></li>
                <li style={NavStyle.li}><a href="#" style={NavStyle.a}>Kids & More</a></li>
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
        
    )
}
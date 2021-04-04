import React from 'react';


export default function Store(props) {
    return (
        <div style={{background: "gray"}}>
            <h1>This is the store frame.</h1>
            {props.children}
        </div>
    )
}
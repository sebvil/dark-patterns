import React from 'react';

export default function Phone(props) {
    
    const styles = {
        root: {
            display: "flex",
            flexDirection: "column",
            background: "black",
            padding: "7px 5px 7px 5px",
            width: "260px",
            height: "560px",
            borderRadius: "10px",
        },
    };
    return (
        <div style={styles.root}> 
            {props.children}
        </div>
    )
  }


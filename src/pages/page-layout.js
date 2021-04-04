import React from 'react';


export default function Page(props) {
    const { description } = props;
    const styles = {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }
    }
    return (
        <div style={styles.root}> 
            <p>{description}</p>
            {props.children}
        </div>
    )
}
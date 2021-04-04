import React from 'react';


export default function Product(props) {
    const {image, productName, description, alt, price} = props;
    const styles = {
        root: {
            display: "flex",
            flexDirection: "column",
            background: "white",
            height: "100%",
            overflow: "hidden",
            alignItems: "flex-start",
            padding: "3px",
        },
        button: {
            border: "none",
            padding: "15px",
            borderRadius: "5px",
            width: "100%",
            marginTop: "5px",

        },
        image: {
            width: "100%",
            height: "auto",
        }
    };
    return (
        <div style={styles.root}>
            <button style={{...styles.button, background: "yellow"}}> Add to Cart</button>
            <button style={{...styles.button, background: "orange"}}>Buy Now</button>
            <h2>{productName}</h2>
            <p>{description}</p>
            <img style={styles.image} src={image} alt={alt} />
            {price}
        </div>
    )
  }


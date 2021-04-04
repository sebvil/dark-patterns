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
        bigButton: {
            border: "none",
            padding: "15px",
            borderRadius: "5px",
            width: "100%",
            marginTop: "5px",
            background: "orange"
        },
        smallButton: {
            border: "none",
            width: "100%",
            background: "none",
            fontSize: '7pt',
            color: "blue",
            textDecoration: "underline"

        },
        image: {
            width: "100%",
            height: "auto",
        }
    };
    return (
        <div style={styles.root}>
            <button 
                style={styles.bigButton}
                onClick={props.onClickBuyNow}
            > Buy Now
            </button>
            <h2 style={{margin: "5px 0 0 0"}}>{productName}</h2>
            <p>{description}</p>
            <img style={styles.image} src={image} alt={alt} />
            {price}
            <button 
            style={styles.smallButton}
            onClick={props.onClickPass}
            >I'll pass. I don't like great deals.</button>

        </div>
    )
  }


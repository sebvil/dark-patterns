import React from 'react';
import Store from '../components/store';
import Social from '../components/social';
import Message from "../components/message";
import Post from "../components/post";
import Product from "../components/product";
import Page from "./page-layout";

export default function Page1(props) {
    const price = () => {
        const styles = {
            root: {
                display: "flex",
                textAlign: "left",
            },
            original: {
                fontSize: "10pt",
                textDecoration: "line-through",
                color: "red"
            }
        }
        return (
            <div style={styles.root}>
            <p style={{fontSize: "11pt"}}>
                <span style={styles.original}>$1000.00 </span>
                 <span style={{fontSize: "14pt"}}>$750.00 </span> 
                  only if you buy within the next 5 minutes! Hurry up!</p>
            </div>
        )
    };

    const onClickBuyNow = () => {
        props.handleMadePurchaseChange();
        props.handleNextDisabledChange()
        props.setStatus("You decided to buy the laptop!");
    }

    const onClickPass = () => {
        props.handleNextDisabledChange()
        props.setStatus("You decided not to buy the laptop!");

    }

    const description1 =   "It's been five minutes since I bought the laptop. I just\
                            checked the page again, and look at that! The promotion is \
                            still going on! I should have perhaps thought about this a bit \
                            more...";

    const description2 =   "It's been five minutes since I bought the laptop. I just\
                            checked the page again, and look at that! I'm glad I did not buy it\
                            before. I still need a laptop, so maybe I will buy it now...";
    
    const getDescription = () => {
        if (props.madePurchase) {
            return description1;
        } else {
            return description2;
        }
    }
                            
    return (
        <Page description={getDescription()}>
            <Store>
                <Product
                    productName="Great laptop"
                    description="This laptop is amazing" 
                    image="https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS-970-80.jpg.webp"
                    alt="laptop"
                    price={price()}
                    buyNowDisabled={props.madePurchase}
                    onClickBuyNow={onClickBuyNow}
                    onClickPass={onClickPass}/>
            </Store>
        </Page>
    )
}
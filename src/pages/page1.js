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
    const description = "I've been needing a laptop for a while,\
                     and I just found this promotion. It's still a lot of money \
                     but I will save a great deal. But I do not have a lot of time to decide.\
                     What should I do?";

    const onClickBuyNow = () => {
        props.handleMadePurchaseChange();
        props.handleNextDisabledChange()
        props.setStatus("You decided to buy the laptop!");
    }

    const onClickPass = () => {
        props.handleNextDisabledChange()
        props.setStatus("You decided not to buy the laptop!");

    }

    
    return (
        <Page description={description}>
            <Store>
                <Product
                    productName="Great laptop"
                    description="This laptop is amazing" 
                    image="https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS-970-80.jpg.webp"
                    alt="laptop"
                    price={price()}
                    onClickBuyNow={onClickBuyNow}
                    onClickPass={onClickPass}/>
            </Store>
        </Page>
    )
}
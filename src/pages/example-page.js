import React from 'react';
import Store from '../components/store';
import Social from '../components/social';
import Message from "../components/message";
import Post from "../components/post";
import Product from "../components/product";
import Page from "./page-layout";

export default function Page1(props) {
    return (
        // <div>
        //     <p>
        //         Page 1 description here.
        //     </p>
        //     {/* <Store>
        //         This is the store content.
        //         <div style={{display: "flex", flexDirection: "column"}}>
        //         <Message sender={"Marco Anaya"} senderInitials={"MA"} is_received>
        //             <p>hello friend</p>
        //         </Message>
        //         <Message>
        //             <p>Oh hi</p>
        //         </Message>
        //         </div>

        //         <Post user="Marco Anaya" profilePic={"https://static.wikia.nocookie.net/disney/images/6/6f/Jar-Jar-Binks_profile.jpg/revision/latest?cb=20191023211510"}>
        //             <p>Racket is by far the best programming language in existance. Anyone who disagrees is a supporter of the Empire.</p>
        //         </Post>
        //     </Store> */}
        //     {/* <Social>
        //         <Product
        //             productName="Great laptop"
        //             description="This laptop is amazing" 
        //             image="https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS-970-80.jpg.webp"
        //             alt="laptop"
        //             price={<p>$1000.00</p>}/>
        //     </Social> */}
        //     <Store><Product
        //             productName="Great laptop"
        //             description="This laptop is amazing" 
        //             image="https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS-970-80.jpg.webp"
        //             alt="laptop"
        //             price={<p>$1000.00</p>}/></Store>
        // </div>
        <Page description="test">
            <Store>
                <Product
                    productName="Great laptop"
                    description="This laptop is amazing" 
                    image="https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS-970-80.jpg.webp"
                    alt="laptop"
                    price={<p>$1000.00</p>}/>
            </Store>
        </Page>
    )
}
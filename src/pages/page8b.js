import React from 'react';
import Store from '../components/store';
import Social from '../components/social';
import Message from "../components/message";
import Post from "../components/post";
import Product from "../components/product";
import Page from "./page-layout";

export default function Page8b(props) {
    return(
        <Page description="I'm hearing about this everywhere">
            <Social>
            <Post user="Concerts!Concerts!Concerts!" profilePic={"https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_1280.jpg"}>
                   <p>Lil Pas X Concert Tickets ONLY 4 LEFT BUY NOW!</p>
                </Post>
            <Post user="Sebastian VM" profilePic={"https://upload.wikimedia.org/wikipedia/commons/9/96/SWC_6_-_Darth_Vader_Costume_%287865106344%29.jpg"}>
                    <p>The Empire really gets a bad wrap imo... the jedi were def in the wrong 👀</p>
            </Post>
            </Social>
        </Page>
    )
}
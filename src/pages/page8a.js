import React from 'react';
import Store from '../components/store';
import Social from '../components/social';
import Message from "../components/message";
import Post from "../components/post";
import Product from "../components/product";
import Page from "./page-layout";

export default function Page8a(props) {
    return(
        <Page description="So much for privacy">
            <Social>
            <Post user="New City Times" profilePic={"https://snappygoat.com/b/0fffd1820d517215fb4fb9b526b0baa4d461130d"}>
                   <p>WhatsYourMessage hacked! Data of over 500 million users leaked</p>
                </Post>
            <Post user="Sebastian VM" profilePic={"https://upload.wikimedia.org/wikipedia/commons/9/96/SWC_6_-_Darth_Vader_Costume_%287865106344%29.jpg"}>
                    <p>The Empire really gets a bad wrap imo... the jedi were def in the wrong 👀</p>
            </Post>
            </Social>
        </Page>
    )
}
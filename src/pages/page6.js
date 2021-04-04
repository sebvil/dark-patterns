import React from 'react';
import Store from '../components/store';
import Social from '../components/social';
import Message from "../components/message";
import Post from "../components/post";
import Product from "../components/product";
import Page from "./page-layout";

export default function Page5(props) {
    const style = {
        height:"100px",
        width: "100px"
    }
    return(
        <Page description="I do need a hot summer bod">
            <Social>
            <Post user="New City Times" profilePic={"https://snappygoat.com/b/0fffd1820d517215fb4fb9b526b0baa4d461130d"}>
                   <p>Major recall of Snake Oil Tanning Products, Reported Cases of Users “Tanning to Death”</p>
                </Post>
            <Post user="Marco Anaya" profilePic={"https://static.wikia.nocookie.net/disney/images/6/6f/Jar-Jar-Binks_profile.jpg"}>
                    <p>Racket is by far the best programming language in existance. Anyone who disagrees is a supporter of the Empire.</p>
            </Post>
            </Social>
        </Page>
    )
}
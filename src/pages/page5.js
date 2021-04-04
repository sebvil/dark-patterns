import React from 'react';
import Store from '../components/store';
import Social from '../components/social';
import Message from "../components/message";
import Post from "../components/post";
import Product from "../components/product";
import Page from "./page-layout";

export default function Page5(props) {
    return(
        <Page description="I do need a hot summer bod">
            <Social>
            <Post user="Hannah Smith" profilePic={"https://cdn.stocksnap.io/img-thumbs/960w/woman-beach_K35V6D0MYJ.jpg"}>
                   <p>Getting ready for hot 🥵 girl summer 👅 with @SnakeOilTans ~~ I absolutely LOVED the FULL snake oil tanning selection! Who’s joining me by the beach? 🏖️</p>
                </Post>
            <Post user="Marco Anaya" profilePic={"https://static.wikia.nocookie.net/disney/images/6/6f/Jar-Jar-Binks_profile.jpg"}>
                    <p>Racket is by far the best programming language in existance. Anyone who disagrees is a supporter of the Empire.</p>
            </Post>
            </Social>
        </Page>
    )
}
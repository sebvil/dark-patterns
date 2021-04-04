import React from 'react';
import Store from '../components/store';
import Social from '../components/social';
import Message from "../components/message";
import Post from "../components/post";

export default function Page1(props) {
    return (
        <div>
            <p>
                Page 1 description here.
            </p>
            {/* <Store>
                This is the store content.
                <div style={{display: "flex", flexDirection: "column"}}>
                <Message sender={"Marco Anaya"} senderInitials={"MA"} is_received>
                    <p>hello friend</p>
                </Message>
                <Message>
                    <p>Oh hi</p>
                </Message>
                </div>

                <Post user="Marco Anaya" profilePic={"https://static.wikia.nocookie.net/disney/images/6/6f/Jar-Jar-Binks_profile.jpg/revision/latest?cb=20191023211510"}>
                    <p>Racket is by far the best programming language in existance. Anyone who disagrees is a supporter of the Empire.</p>
                </Post>
            </Store> */}
            <Social>
                <Post user="Marco Anaya" profilePic={"https://static.wikia.nocookie.net/disney/images/6/6f/Jar-Jar-Binks_profile.jpg/revision/latest?cb=20191023211510"}>
                    <p>Racket is by far the best programming language in existance. Anyone who disagrees is a supporter of the Empire.</p>
                </Post>
                <Post user="Marco Anaya" profilePic={"https://static.wikia.nocookie.net/disney/images/6/6f/Jar-Jar-Binks_profile.jpg/revision/latest?cb=20191023211510"}>
                    <p>Racket is by far the best programming language in existance. Anyone who disagrees is a supporter of the Empire.</p>
                </Post>
                <Post user="Marco Anaya" profilePic={"https://static.wikia.nocookie.net/disney/images/6/6f/Jar-Jar-Binks_profile.jpg/revision/latest?cb=20191023211510"}>
                    <p>Racket is by far the best programming language in existance. Anyone who disagrees is a supporter of the Empire.</p>
                </Post>
            </Social>
        </div>
    )
}
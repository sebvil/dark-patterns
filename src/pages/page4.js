import React from 'react';
import Messenger from "../components/messenger";
import Message from "../components/message";
import Page from "./page-layout";

export default function Page4(props) {
    const { messenger } = props;
    const messengerColor = (messenger === 'social media') ? 'blue' : 'green';
    return (
        <Page description="test">
            <Messenger messengerColor={messengerColor}>

        <Message 
            sender={"Marco Anaya"} 
            senderInitials={"MA"} 
            is_received
            messengerColor={messengerColor}
        >
            <p>hello friend</p>
        </Message>
        <Message
        color={messengerColor}
        >
            <p>Oh hi</p>
        </Message>
        </Messenger>
        </Page>
    )
}
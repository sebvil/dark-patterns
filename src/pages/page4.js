import React from 'react';
import Messenger from "../components/messenger";
import Message from "../components/message";
import Page from "./page-layout";

export default function Page4(props) {
    const { messenger, page, madePurchase, handleNextDisabledChange } = props;
    console.log(handleNextDisabledChange);
    const sender = page === 3
        ? { sender: "Friend 1", senderInitials: "F1"}
        : { sender: "Friend 2", senderInitials: "F2"};
    const messengerColor = (messenger === 'social media') ? 'blue' : 'green';

    const onClickSend = () => {
        console.log("hello");
        props.handleNextDisabledChange();
        props.setStatus("You sent message!");
    }

    return (
        <Page description="test">
            <Messenger messengerColor={messengerColor} sender={sender.sender}>

            <Message {...sender} is_received messengerColor={messengerColor}>
                <p>just bought tickets to the lil pas concert!!</p>
            </Message>
            <p></p>
            <Message {...sender} is_received messengerColor={messengerColor}>
                <p>we HAVE to go</p>
            </Message>
            <p></p>
            {
                madePurchase ? 
                    <Message color={messengerColor} to_send handleOnClick={onClickSend}>
                        <p>damn i cant make it. dont have any money :(</p>
                    </Message>
                 : 
                    <Message color={messengerColor} to_send>
                        <p>ok bet gimme one. good thing i didnt get that laptop</p>
                    </Message>
                
            }
            

        </Messenger>
        </Page>
    )
}
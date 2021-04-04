import React from 'react';
import Store from '../components/store';
import Message from "../components/message";

export default function Page1(props) {
    return (
        <div>
            <p>
                Page 1 description here.
            </p>
            <Store>
                This is the store content.
                <Message sender={"Marco Anaya"} senderInitials={"MA"} is_received>
                    <p>hello friend</p>
                </Message>
                <Message>
                    <p>Oh hi</p>
                </Message>
            </Store>
        </div>
    )
}
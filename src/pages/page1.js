import React from 'react';
import Store from '../components/store';

export default function Page1(props) {
    return (
        <div>
            <p>
                Page 1 description here.
            </p>
            <Store>
                This is the store content.
            </Store>
        </div>
    )
}
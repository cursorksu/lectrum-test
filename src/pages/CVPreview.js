import React from 'react';
import {useSelector} from  'react-redux';
import {Title} from "../components/Title";
import {Intro} from "../components/Intro";

export const CVPreview = () => {
    const userCVData = useSelector(store => store.userCVData);
    const {firstName, lastName, email, phone, address} = userCVData;
    return (
        <Intro>
            <h1>CVPreview</h1>

            <h2>{firstName} {lastName}</h2>

            <h2>Contacts:</h2>
            <ul>
                <li>{email}</li>
                <li>{phone}</li>
                <li>{address}</li>
            </ul>
        </Intro>
    )
};
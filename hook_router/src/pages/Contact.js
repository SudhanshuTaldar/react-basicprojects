import React from 'react';
import {useParams} from 'react-router';
//display router parameters 
function Contact()
{   
    const {firstname , lastname} = useParams();
    return (<div>User:  {firstname} {lastname}</div>);
}

export default Contact;
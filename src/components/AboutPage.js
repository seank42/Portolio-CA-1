import React from 'react';
import { Container } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Container className="text-center mt-5">
            <h1 className="mb-5 fw-bold">About Me</h1>
           
            <h2>Hi, my name is Seán Kearney. Here are all my projects from my college course.

                My email is - N00211599@iadt.ie 
                My phone number is - 0833580422
            </h2>
            <hr></hr>
            <h5>Rest countries it is an app that  displays to the user all countries and will tell me information about it. </h5>
            <hr></hr>
            <h5>Giphy view is about using an api to display gifs so we can search and filter them to find certain gifs. </h5>
            <hr></hr>
            <h5>Todo is an app that is a checklist app that you can add, delete and check tasks for the user to do . </h5>
            <hr></hr>
            <h5>Event Go is an app that allows users to see events that might want to see and go to. </h5>
            <hr></hr>

        </Container>
    );
};

export default AboutPage;
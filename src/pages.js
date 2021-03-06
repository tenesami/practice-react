import React from 'react';
import {Link, useLocation, Outlet} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[company website]</h1>
            <nav>
                <Link to="about"> About </Link>
                <Link to="events">Events </Link>
                <Link to="contact">Contact </Link>
                
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}
export function Services(){
    return(
        <div><h2> Our Servieses </h2></div>
    )
}

export function CompanyHistory(){
    return(
        <div><h2> Our Company History </h2></div>
    )
}

export function Location(){
    return(
        <div><h2> Our Location </h2></div>
    )
}



export function Event() {
    return (
        <div>
            <h1>[Event]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function NotFound() {
    let location = useLocation();

    return (
        <div>
            <h1>Whoops {location.pathname} page not found! </h1>
        </div>
    )
}
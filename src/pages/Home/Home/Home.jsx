import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import MainBody from '../MainBody/MainBody';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json')
.then(res => res.json());
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Body></Body>
            <MainBody></MainBody>
            
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;
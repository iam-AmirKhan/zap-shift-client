import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import MainBody from '../MainBody/MainBody';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Body></Body>
            <MainBody></MainBody>
            <Brands></Brands>
        </div>
    );
};

export default Home;
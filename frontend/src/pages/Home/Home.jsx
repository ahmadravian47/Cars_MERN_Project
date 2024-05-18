import React from 'react'
import Hero from '../../components/Hero/Hero';
import Sedan from '../../components/Sedan/Sedan';
import Listing from '../../components/Listing/Listing'
import Service from '../../components/Service/Service'

const Home = () => {
    return (
        <>
            <Hero />
            <Service />
            <Listing></Listing>
            <Sedan />
           
        </>
    )
}

export default Home

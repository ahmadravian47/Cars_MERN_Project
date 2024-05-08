import React from 'react'
import Hero from '../../components/Hero/Hero';
import Sedan from '../../components/Sedan/Sedan';
import Listing from '../../components/Listing/Listing'

const Home = () => {
    return (
        <>
            <Hero />
            <Sedan />
            <Listing></Listing>
        </>
    )
}

export default Home

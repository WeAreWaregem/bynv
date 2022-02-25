import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import SearchPanel from '../SearchPanel';

function Home(){
    return ( 
        <>
            <HeroSection />
            <SearchPanel />
        </>
    );
}

export default Home
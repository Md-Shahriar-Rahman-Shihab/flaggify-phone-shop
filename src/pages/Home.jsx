import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhonesContainer from '../Components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    //data
    const data = useLoaderData()
    const [phones,setPhones] = useState(data)
    const handleSearch = (e,text) =>{
        e.preventDefault()
        if(text==='') return setPhones(data)
        
        const searchedPhones = data.filter(
            phone=>
            phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
        )
        // console.log(searchedPhones);
        setPhones(searchedPhones)
        
    }
    
    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            <PhonesContainer phones={phones}></PhonesContainer>
        </div>
    );
};

export default Home;
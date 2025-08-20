import React from 'react'
import Navbar from '../Components/Common-parts/Navbar'
import Hero from '../Components/Home/Hero';
import Form from '../Components/Home/Form';
import Destination from '../Components/Home/Destination';
import Features from '../Components/Home/Features';
import Whywe from '../Components/Home/Whywe';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Form />
      <Destination />
      <Features />
      <Whywe />
    </div>
  )
}

export default Home;
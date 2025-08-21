import React from 'react'
import Navbar from '../Components/Common-parts/Navbar'
import Hero from '../Components/Home/Hero';
import Form from '../Components/Home/Form';
import Destination from '../Components/Home/Destination';
import Features from '../Components/Home/Features';
import Whywe from '../Components/Home/Whywe';
import Categories from '../Components/Home/Categories';
import Location from '../Components/Home/Location';
import Remember from '../Components/Home/Remember';
import Gallery from '../Components/Home/Gallery';
import Testimonials from '../Components/Home/Testimonials';
import FooterImage from '../Components/Common-parts/Footer-Image';
import Footer from '../Components/Common-parts/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Form />
      <Destination />
      <Features />
      <Whywe />
      <Categories />
      <Location />
      <Remember />
      <Gallery />
      <Testimonials />
      <FooterImage />
      <Footer />
    </div>
  )
}

export default Home;
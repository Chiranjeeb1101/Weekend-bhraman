import React, { Component } from 'react'
import FooterImg from "../../assets/Footer-Image.png";

const FooterImage = () => {
  return (
    <div className="bg-white md:mx-8">
        <img src={FooterImg} alt="Why Choose Us" className="w-full h-full object-cover"/>
    </div>
  )
}
export default FooterImage;


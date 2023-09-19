import React from "react";
import instagramIcon from "../../assets/logo/instagram.svg";
import facebookIcon from "../../assets/logo/facebook.svg";

const Footer = () => {
  return (
    <footer className='bg-blue px-5 py-5 h-full'>
      <div className='border-b-2 border-white md:flex items-center gap-14 py-10 hidden'>
        <h1 className='text-white text-4xl'>Where To Buy ?</h1>
        <h2 className='text-white text-2xl'>
          Our Products are currently available in{" "}
          <br className='hidden md:block' /> Lebanese stores{" "}
        </h2>
      </div>
      <div className='flex flex-col md:flex-row gap-5 pt-5'>
        <h1 className='text-white'>LogoHere</h1>
        <ul className='text-white'>
          <li>Address: Mount Lebanon</li>
          <li>Phone 96171455200</li>
          <li>
            email:
            <span className='text-btnColor'>salibadairies@gmail.com</span>
          </li>
        </ul>
        <div className='flex gap-5'>
          <img src={instagramIcon} alt='' />
          <img src={facebookIcon} alt='' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./home.css";

import cowIcon from "../assets/icons/cow-White.svg";
import cowImage from "../assets/images/ourStory.png";
import blacCowIcon from "../assets/icons/Cowicon.svg";
import { cardsData, productData } from "../data/dummy";
import Card from "../components/card/Card";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className='bg-hero min-h-screen'>
        <div className='text-center text-white pt-52'>
          <h1 className='text-5xl pb-5 md:text-[100px] md:pb-12'>
            Milk & More
          </h1>
          <h1 className='text-2xl pb-5 md:text-[40px] md:pb-10'>
            Fresh Local Delivered
          </h1>
          <button className='xl:text-2xl p-4 bg-blue px-12 rounded-sm'>
            View our product
          </button>
        </div>
      </div>
      {/* Family section */}
      <div className='bg-blue'>
        <div className='flex flex-col justify-center items-center text-white text-center py-12'>
          <h1 className='text-4xl pb-5'>Welcome To Our Familiy</h1>
          <img src={cowIcon} alt='' />
          <p className='text-2xl pt-2'>
            Here you will find a wide range of healthy and fresh products that,{" "}
            <br /> were proudly produced by our farm
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 mt-24'>
        {cardsData.map((cards, index) => (
          <Card
            img={cards.img}
            text={cards.title}
            subtext={cards.desc}
            key={index}
          />
        ))}
      </div>
      <div className='main-bg min-h-screen -z-10'>
        <div className='pt-14 mx-auto relative container z-10 text-center md:text-left'>
          <h1 className='pb-5 text-btnColor text-5xl'>What's Fresh</h1>
          <div className='flex justify-center  items-center gap-10 md:justify-start'>
            <div className='w-[65px] h-[2px] bg-white' />
            <img src={cowIcon} alt='cow icon' />
            <div className='w-[65px] h-[2px] bg-white' />
          </div>
          <h3 className='text-white text-xl'>
            From our Family <br /> To Yours
          </h3>
          <p className='text-white pt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Lorem ipsum dolor <br /> sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt <br /> ut labore et dolore magna
            aliqua.
          </p>
        </div>
      </div>
      <div>
        <div className='text-center py-12'>
          <h1 className='text-4xl pb-12'>About us</h1>
          <div className='flex justify-center items-center gap-10'>
            <div className='w-[65px] h-[2px] bg-black' />
            <img src={blacCowIcon} alt='cow icon' />
            <div className='w-[65px] h-[2px] bg-black' />
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center gap-24 my-24'>
            <div className='text-center md:text-left'>
              <h1>Our Story</h1>
              <p className='pt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br className='hidden sm:block' /> tempor incididunt ut
                labore et dolore magna aliqua. Lorem ipsum dolor{" "}
                <br className='hidden sm:block' /> sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt{" "}
                <br className='hidden sm:block' /> ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <img
              src={cowImage}
              alt=''
              className='hidden md:block rounded-full w-auto'
            />
          </div>
        </div>
        <div className='text-center'>
          <div className='text-center py-12'>
            <h1 className='text-4xl pb-12'>Products</h1>
            <div className='flex justify-center items-center gap-10'>
              <div className='w-[65px] h-[2px] bg-btnColor' />
              <img src={blacCowIcon} alt='cow icon' />
              <div className='w-[65px] h-[2px] bg-btnColor' />
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 mt-24'>
            {productData.map((product, index) => (
              <Card
                img={product.img}
                text={product.title}
                subtext={product.desc}
                key={index}
              />
            ))}
          </div>
          <button className='bg-blue p-3 px-10 text-xl text-white my-5'>
            View All Product
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react'
import Slider from 'react-slick';
import EastIcon from '@mui/icons-material/East';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

  return (
      <div className=' w-[75%] bg-slate-200 sm:flex hidden overflow-hidden justify-center items-center'>
          <Slider {...settings} className=' w-full h-full mx-10'>
              <div className='relative w-full h-full'>
                  <div className='absolute flex justify-around items-start flex-col w-[50%] h-[50%] px-6 py-4 glass left-[25%] top-[25%]'>
                      <h1 className=' text-white text-3xl font-bold capitalize '>Admin Dashboard</h1>
                      <p className='text-xl font-semibold text-white'>The Admin Dashboard Website provides a comprehensive interface for managing and monitoring your systems.</p>
                      <button className='flex items-center justify-center text-white'><h1 className='mr-4 border-b-2 border-white '>Learn more</h1><EastIcon className='text-sm ' /></button>
                  </div>
                  <img src="https://www.datameer.com/wp-content/uploads/2019/12/Data-Vizualisation-924x512.png" alt="..." className='w-full h-screen ' />
              </div>
              <div className='relative w-full h-full'>
                  <div className='absolute flex justify-around items-start flex-col w-[50%] h-[50%] px-6 py-4 glass left-[25%] top-[25%]'>
                      <h1 className=' text-white text-3xl font-bold capitalize '>Admin Panel</h1>
                      <p className='text-xl font-semibold text-white'>It offers real-time analytics, user management, and customizable settings, allowing administrators to efficiently oversee operations and make informed decisions.</p>
                      <button className='flex items-center justify-center text-white'><h1 className='mr-4 border-b-2 border-white '>Learn more</h1><EastIcon className='text-sm ' /></button>
                  </div>
                  <img src="https://boostlabs.com/wp-content/uploads/2023/02/10-types-of-data-visualization-1-1024x614.jpg" alt="..." className='w-full h-screen ' />
              </div>
          </Slider>
      </div>
  )
}

export default Banner

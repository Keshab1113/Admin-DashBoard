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
              <div className='relative w-full h-full '>
                  <div className='absolute w-[50%] pl-20 pt-5'>
                      <h1 className='pb-10 text-3xl font-bold capitalize '>Heading of the login page and it is the demo heading</h1>
                      <h3 className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt, vero laborum asperiores laboriosam blanditiis esse harum expedita voluptatum, facere quam eos, libero dolorum deleniti molestias architecto excepturi optio aliquid?</h3>
                      <button className='flex items-center justify-center mt-4 '><h1 className='mr-4 border-b-2 border-black '>Learn more</h1><EastIcon className='text-sm ' /></button>
                  </div>
                  <img src="https://png.pngtree.com/background/20220729/original/pngtree-vector-illustration-hi-tech-digital-technology-design-colorful-on-circuit-board-picture-image_1866785.jpg" alt="..." className='w-full h-full ' />
              </div>
              <div className='relative w-full h-full '>
                  <div className='absolute w-[50%] pl-20 pt-5'>
                      <h1 className='pb-10 text-3xl font-bold capitalize '>Heading of the login page and it is the demo heading</h1>
                      <h3 className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt, vero laborum asperiores laboriosam blanditiis esse harum expedita voluptatum, facere quam eos, libero dolorum deleniti molestias architecto excepturi optio aliquid?</h3>
                      <button className='flex items-center justify-center mt-4 '><h1 className='mr-4 border-b-2 border-black '>Learn more</h1><EastIcon className='text-sm ' /></button>
                  </div>
                  <img src="https://img.freepik.com/free-vector/white-technology-background_23-2148403821.jpg" alt="..." className='w-full h-full ' />
              </div>
              <div className='relative w-full h-full '>
                  <div className='absolute w-[50%] pl-20 pt-5'>
                      <h1 className='pb-10 text-3xl font-bold capitalize '>Heading of the login page and it is the demo heading</h1>
                      <h3 className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt, vero laborum asperiores laboriosam blanditiis esse harum expedita voluptatum, facere quam eos, libero dolorum deleniti molestias architecto excepturi optio aliquid?</h3>
                      <button className='flex items-center justify-center mt-4 '><h1 className='mr-4 border-b-2 border-black '>Learn more</h1><EastIcon className='text-sm ' /></button>
                  </div>
                  <img src="https://img.freepik.com/free-vector/white-technology-background_23-2148403821.jpg" alt="..." className='w-full h-full ' />
              </div>
              <div className='relative w-full h-full '>
                  <div className='absolute w-[50%] pl-20 pt-5'>
                      <h1 className='pb-10 text-3xl font-bold capitalize '>Heading of the login page and it is the demo heading</h1>
                      <h3 className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt, vero laborum asperiores laboriosam blanditiis esse harum expedita voluptatum, facere quam eos, libero dolorum deleniti molestias architecto excepturi optio aliquid?</h3>
                      <button className='flex items-center justify-center mt-4 '><h1 className='mr-4 border-b-2 border-black '>Learn more</h1><EastIcon className='text-sm ' /></button>
                  </div>
                  <img src="https://png.pngtree.com/background/20220729/original/pngtree-vector-illustration-hi-tech-digital-technology-design-colorful-on-circuit-board-picture-image_1866785.jpg" alt="..." className='w-full h-full ' />
              </div>
          </Slider>
      </div>
  )
}

export default Banner

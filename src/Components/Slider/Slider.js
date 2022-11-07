import React from 'react'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import './Slider.css';

const Slider = () => {
    return (
        <div className="carousel w-full relative">
            <div id="slide1" className="carousel-item w-full banner1 ">
                <img src={banner1} className="w-full img1" alt='' />
                <p className='text-gray-300 uppercase font-bold text-1xl md:text-4xl z-10 absolute flex justify-center items-center w-full h-full leading-normal tracking-widest'>Life is short SMILE <br /> while you still have teeth</p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                    <a href="#slide3" className="btn btn-circle bg-[#1B75BC] text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#1B75BC] text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full banner1">
                <img src={banner2} className="w-full" alt='' />
                <p className='text-gray-300 uppercase font-bold text-1xl md:text-4xl z-10 absolute flex justify-center items-center w-full h-full leading-normal tracking-widest'>Life is short SMILE <br /> while you still have teeth</p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                    <a href="#slide1" className="btn btn-circle bg-[#1B75BC] text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#1B75BC] text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full banner1">
                <img src={banner3} className="w-full" alt='' />
                <p className='text-gray-300 uppercase font-bold text-1xl md:text-4xl z-10 absolute flex justify-center items-center w-full h-full leading-normal tracking-widest'>Life is short SMILE <br /> while you still have teeth</p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                    <a href="#slide2" className="btn btn-circle bg-[#1B75BC] text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#1B75BC] text-white">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Slider
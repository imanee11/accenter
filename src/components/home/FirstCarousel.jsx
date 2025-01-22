import React from 'react';

import Slider from "react-slick";
import image from '../../constants/image';
import NavBar from './NavBar';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-next-arrow`}
            style={{ ...style, display: "block", right: "10px", fontSize: "", }}
            onClick={onClick}
        >

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-prev-arrow`}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        >

        </div>
    );
}

const FirstCarousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };


    return (
        <>
            <div className='overflow-hidden h-[100vh]  '>
                <NavBar />
                <Slider {...settings}>
                    <div className='relative'>
                        <img src={image.bg2} alt="" className='h-[90vh] w-[100vw] object-cover' />
                        <div className='absolute w-[60vw] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'>
                            <p className="uppercase font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-white">
                                Simplifiez Votre Gestion Comptable avec Notre Expertise
                                <span className="text-secondary italic"> Franco-Marocaine</span>
                            </p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={image.bg2} alt="" className='h-[90vh] w-[100vw] object-cover' />
                        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col  '>
                            <p className='text-white text-[20px] text-center '>Women Collection 2018</p>
                            <p className='text-white text-[60px] font-bold text-center pb-10 '>NEW ARRIVALS</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={image.bg2} alt="" className='h-[90vh] w-[100vw] object-cover' />
                        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col  '>
                            <p className='text-white text-[20px] text-center '>Women Collection 2018</p>
                            <p className='text-white text-[60px] font-bold text-center pb-10 '>NEW ARRIVALS</p>
                        </div>
                    </div>
                </Slider>
            </div>

        </>
    );
};

export default FirstCarousel;
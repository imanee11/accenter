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
        autoplaySpeed: 4000,
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
                            <p className="uppercase font-bold text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-white">
                                Simplifiez Votre Gestion Comptable avec Notre Expertise
                                <span className="text-secondary italic"> Franco-Marocaine</span>
                            </p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={image.bgC2} alt="" className='h-[90vh] w-[100vw] object-cover' />
                        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                            <p className="pb-4 uppercase font-bold text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-white text-center">
                                Sous traitance Comptable
                            </p>
                            <button className='font-baloo inline-block hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-5 py-[2vh] font-semibold text-sm text-white border-2 border-secondary hover:bg-secondary hover:text-likeblack rounded-full transition duration-300 whitespace-nowrap'>
                                Plus de détails
                            </button>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src={image.bgC3} alt="" className='h-[90vh] w-[100vw] object-cover' />
                        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                            <p className="pb-4 uppercase font-bold text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-white text-center">
                                Sous traitance paie et social
                            </p>
                            <button className='font-baloo inline-block hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-5 py-[2vh] font-semibold text-sm text-white border-2 border-secondary hover:bg-secondary hover:text-likeblack rounded-full transition duration-300 whitespace-nowrap'>
                                Plus de détails
                            </button>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src={image.bgC4} alt="" className='h-[90vh] w-[100vw] object-cover' />
                        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                            <p className="pb-4 uppercase font-bold text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-white text-center">
                                Prestations Connexes
                            </p>
                            <button className='font-baloo inline-block hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-5 py-[2vh] font-semibold text-sm text-white border-2 border-secondary hover:bg-secondary hover:text-likeblack rounded-full transition duration-300 whitespace-nowrap'>
                                Plus de détails
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>

        </>
    );
};

export default FirstCarousel;
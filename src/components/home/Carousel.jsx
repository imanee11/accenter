import React from "react";
import Slider from "react-slick";
import image from "../../constants/image";


import { RxDotFilled } from "react-icons/rx";


function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className="flex flex-col  rounded-xl  border-[1px] border-gray-300 bg-white  cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  transition-transform duration-300 ">
                        <div className="">
                            <img src={image.pic4} alt="" className="rounded-t-xl" />
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold">Réduire vos coûts</p>
                            <p className="mt-2 text-likeblack">Grâce à nos tarifs compétitifs et notre expertise, AC Center réduit vos dépenses liées à la gestion comptable et sociale. Cela libère vos équipes pour des tâches à forte valeur ajoutée et vous évite :</p>
                            <p className="flex items-center gap-3 pt-3 text-likeblack"><RxDotFilled />Investissements informatiques inutiles.</p>
                            <p className="flex items-center gap-3 pt-2 text-likeblack"><RxDotFilled />Paramétrage et maintenance de logiciels.</p>
                        </div>

                    </div>

                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;

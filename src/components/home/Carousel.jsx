import React from "react";
import Slider from "react-slick";
import image from "../../constants/image";


import { RxDotFilled } from "react-icons/rx";


function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,

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
                <div className="p-2 ">
                    <div className=" h-[78vh] flex flex-col  rounded-xl  border-[1px] border-gray-300 bg-white  cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  transition duration-300 ">
                        <div className="">
                            <img src={image.pic4} alt="" className="rounded-t-xl" />
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold">Réduire vos coûts</p>
                            <p className="mt-2 text-likeblack">Grâce à nos tarifs compétitifs et notre expertise, AC Center optimise vos processus comptables et sociaux, libérant ainsi vos équipes des tâches administratives. Profitez d’économies sur l’investissement informatique, le paramétrage et la maintenance des logiciels.</p>
                        </div>

                    </div>

                </div>
                <div className="p-2 pb-5">
                    <div className="h-[78vh] flex flex-col  rounded-xl  border-[1px] border-gray-300 bg-white  cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  transition duration-300 ">
                        <div className="">
                            <img src={image.pic5} alt="" className="rounded-t-xl" />
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold">Assurer la qualité de vos services</p>
                            <p className="mt-2 text-likeblack">AC Center met à votre disposition une équipe qualifiée, dirigée par des experts en comptabilité, gestion sociale, management et informatique, et encadrée par un expert-comptable inscrit à l'Ordre des Experts-Comptables, garantissant ainsi la qualité de nos services.</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 pb-5">
                    <div className="h-[78vh] flex flex-col  rounded-xl  border-[1px] border-gray-300 bg-white  cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  transition duration-300 ">
                        <div className="">
                            <img src={image.pic6} alt="" className="rounded-t-xl" />
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold">Exploiter vos ressources</p>
                            <p className="mt-2 text-likeblack">Avec l’appui des experts d’AC Center, déléguez les tâches qui ne relèvent pas de votre cœur de métier et concentrez-vous pleinement sur vos priorités stratégiques. Vous gagnerez ainsi du temps et de l’énergie pour approfondir vos réflexions et faire avancer vos projets.</p>
                        </div>
                    </div>
                </div>

                <div className="p-2 pb-5">
                    <div className="h-[78vh] flex flex-col  rounded-xl  border-[1px] border-gray-300 bg-white  cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  transition duration-300 ">
                        <div className="">
                            <img src={image.pic7} alt="" className="rounded-t-xl" />
                        </div>
                        <div className="p-4">
                            <p className="text-lg font-semibold">Assurer la sécurité de vos données</p>
                            <p className="mt-2 text-likeblack">Vos informations seront stockées en toute sécurité sur un serveur protégé et fiable.</p>
                        </div>
                    </div>
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

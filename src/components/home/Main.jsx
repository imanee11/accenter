import React, { useState } from 'react';
import NavBar from './NavBar';

import { FaCheckCircle, FaClock, FaUserTie, FaTag } from 'react-icons/fa';
import { FaCircleCheck } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";



import image from '../../constants/image';


const Main = () => {

    const [activeTab, setActiveTab] = useState(1);




    return (
        <>
            <div>
                <section className='hero'>
                    {/* Overlay Content */}
                    <div className="" id='home'>
                        <NavBar />
                        <div className="lg:w-[60vw] px-[5vw] lg:py-[22vh] md:py-[22vh] py-[15vh]">
                            <p className="font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-likeblack">
                                Simplifiez Votre Gestion Comptable avec Notre Expertise
                                <span className="text-secondary italic"> Franco-Marocaine</span>
                            </p>
                        </div>
                    </div>

                    {/* Additional Section */}
                    <section className="lg:px-[10vw] px-[7vw] bg-white rounded-t-[3rem] ">

                        {/* about */}
                        <section className="lg:pt-[10vh] pt-[7vh] font-baloo " id='about'>
                            {/* <p className='font-baloo pt-4'>Confiez-nous la gestion de votre comptabilité et bénéficiez d'un service personnalisé alliant expertise française et marocaine. Simplifiez vos démarches et concentrez-vous sur l’essentiel.</p> */}

                            {/* border-l-[4px] pl-3 border-primary */}
                            <p className=" text-likeblack font-sans text-center text-[19px] font-bold uppercase  ">À propos d'<span className=''>AC CENTER</span></p>

                            <p className='pt-4'>AC Center, installé au Maroc, se spécialise dans la sous-traitance de la saisie comptable et de la gestion de la paie. Ces services sont assurés par des experts-comptables basés en France, garantissant un travail professionnel et de haute qualité adapté aux besoins des clients.</p>

                            <div className="pt-10">
                                <div className="max-w-7xl mx-auto">
                                    <p className=" text-likeblack font-medium border-l-[4px] pl-3 border-accent">Pourquoi choisissent <span className='font-semibold'>AC CENTER</span>?</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 gap-3 pt-5">

                                        <div className="flex flex-col p-4 rounded-xl  border-[1px] border-gray-300 bg-primary/5 hover:bg-primary/25 cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300 ">
                                            <div className=" text-primary rounded-full  mb-4 inline-block">
                                                <FaCheckCircle className="text-3xl" />
                                            </div>
                                            <p className="text-lg font-semibold">Simplicité</p>
                                            <p className="text-likeblack mt-2">Toutes vos démarches juridiques et comptables au même endroit.</p>
                                        </div>

                                        <div className="flex flex-col p-4 rounded-xl border-[1px] border-gray-300 bg-primary/5 cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300">
                                            <div className="text-primary rounded-full  mb-4">
                                                <FaClock className="text-3xl" />
                                            </div>
                                            <p className="text-lg font-semibold">Rapidité</p>
                                            <p className="text-likeblack mt-2">Traitement du dossier en 48h.</p>
                                        </div>

                                        <div className="flex flex-col p-4 rounded-xl border-[1px] border-gray-300 bg-primary/5 cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300">
                                            <div className="text-primary rounded-full  mb-4">
                                                <FaUserTie className="text-3xl" />
                                            </div>
                                            <p className="text-lg font-semibold">Fiabilité</p>
                                            <p className="text-likeblack mt-2">Plus de 50 juristes diplômés à vos côtés. Basés en France.</p>
                                        </div>

                                        <div className="flex flex-col p-4 rounded-xl border-[1px] border-gray-300 bg-primary/5 cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300">
                                            <div className="text-primary rounded-full  mb-4">
                                                <FaTag className="text-3xl" />
                                            </div>
                                            <p className="text-lg font-semibold">Prix</p>
                                            <p className="text-likeblack mt-2">Un rapport qualité / prix imbattable.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* services */}

                    </section>
                </section>



            </div>

        </>
    );
};

export default Main;
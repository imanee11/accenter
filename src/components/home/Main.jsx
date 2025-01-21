import React, { useState } from 'react';
import NavBar from './NavBar';

import { FaCheckCircle, FaClock, FaUserTie, FaTag } from 'react-icons/fa';
import { FaCircleCheck } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import image from '../../constants/image';
import Carousel from './Carousel';


const Main = () => {

    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            title: "Sous traitance Comptable",
            content: (
                <div className='flex flex-col-reverse lg:flex-row gap-5'>
                    <div className='lg:w-[50vw]'>
                        <p className="pb-3 text-likeblack font-semibold text-[18px]">
                            Sous traitance pour cabinets d'expertise comptable
                        </p>
                        <p>Nous proposons une gestion externalisée complète de votre comptabilité pour optimiser le fonctionnement de votre entreprise tout en garantissant la qualité et la fiabilité des informations comptables et financières. Nos services incluent :</p>
                        <div className='pt-3'>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Saisie et traitement des données comptables</p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Préparation des déclarations fiscales</p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Production des comptes annuels et/ou intermédiaires </p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Révision globale de la comptabilité</p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Rattrapage des comptabilités en retard ou mal gérées</p>
                            {/* link */}
                            <p className='flex items-center gap-3 underline cursor-pointer transition duration-300 text-accent'>Plus details<FaLongArrowAltRight className='text-accent' /></p>
                        </div>

                    </div>
                    <div className='lg:w-[50vw]'>
                        <img
                            src={image.pic1}
                            alt="Sous traitance Comptable"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: "Sous traitance paie et social",
            content: (
                <div className='flex  flex-col-reverse lg:flex-row gap-5'>
                    <div className='lg:w-[50vw]'>
                        <p className="pb-3 text-likeblack font-semibold text-[18px]">
                            Gestion externalisée efficace de la paie et des ressources humaines
                        </p>
                        <p>Nous offrons un service externalisé complet pour la gestion de la paie et des ressources humaines, vous aidant à maîtriser vos coûts et à améliorer votre organisation. Nos prestations incluent :</p>
                        <div className='pt-3'>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Traitement des données de paie</p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Gestion centralisée des données</p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Émission des fiches de paie</p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Préparation des obligations sociales</p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Gestion des droits et obligations des salariés</p>
                            {/* link */}
                            <p className='flex items-center gap-3 underline cursor-pointer transition duration-300 text-accent'>Plus details<FaLongArrowAltRight className='text-accent' /></p>
                        </div>

                    </div>
                    <div className='lg:w-[50vw]'>
                        <img
                            src={image.pic2}
                            alt="Sous traitance Comptable"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            title: "Prestations Connexes",
            content: (
                <div className='flex  flex-col-reverse lg:flex-row gap-5'>
                    <div className='lg:w-[50vw]'>
                        <p className="pb-3 text-likeblack font-semibold text-[18px]">
                            Gestion externalisée des outils d’aide à la prise de décisions
                        </p>
                        <p>Nous proposons la création de budgets, bilans prévisionnels et tableaux de bord pour fournir aux décideurs des indicateurs de gestion fiables et opportuns, essentiels aux décisions stratégiques.</p>
                        <div className='pt-3'>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Élaboration et suivi des budgets</p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Bilans prévisionnels</p>
                            <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Tableaux de bord</p>
                            {/* <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Préparation des obligations sociales</p> */}
                            {/* <p className='flex items-center gap-3 pb-3'><FaCircleCheck className='text-accent' />Gestion des droits et obligations des salariés</p> */}
                            {/* link */}
                            <p className='flex items-center gap-3 underline cursor-pointer transition duration-300 text-accent'>Plus details<FaLongArrowAltRight className='text-accent' /></p>
                        </div>

                    </div>
                    <div className='lg:w-[50vw]'>
                        <img
                            src={image.pic3}
                            alt="Sous traitance Comptable"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
    ];


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
                    <section className=" bg-white rounded-t-[3rem] ">

                        {/* about */}
                        <section className="lg:px-[10vw] px-[7vw] lg:pt-[10vh] pt-[7vh] font-baloo " id='about'>
                            {/* <p className='font-baloo pt-4'>Confiez-nous la gestion de votre comptabilité et bénéficiez d'un service personnalisé alliant expertise française et marocaine. Simplifiez vos démarches et concentrez-vous sur l’essentiel.</p> */}

                            {/* border-l-[4px] pl-3 border-primary */}
                            <p className=" text-likeblack font-sans text-center text-[19px] font-bold uppercase  ">À propos d'<span className=''>AC CENTER</span></p>

                            <p className='pt-4'>AC Center, installé au Maroc, se spécialise dans la sous-traitance de la saisie comptable et de la gestion de la paie. Ces services sont assurés par des experts-comptables basés en France, garantissant un travail professionnel et de haute qualité adapté aux besoins des clients.</p>

                            <div className="pt-10">
                                <div className="max-w-7xl mx-auto">
                                    <p className=" text-likeblack font-medium border-l-[4px] pl-3 border-accent">Pourquoi choisissent <span className='font-semibold'>AC CENTER</span>?</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 gap-3 pt-5">

                                        <div className="flex flex-col p-4 rounded-xl  border-[1px] border-gray-300 bg-primary/5  cursor-pointer hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-300 ">
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
                        <section id='services' className="lg:px-[10vw] px-[7vw] lg:pt-[15vh] lg:pb-[10vh] pt-[7vh] pb-[4vh] font-baloo">
                            <p className=" text-likeblack font-sans  text-center text-[19px] uppercase font-bold  ">Nos services</p>
                            <div className="w-full mx-auto lg:pt-8 pt-4">
                                {/* Tab Buttons */}
                                <div className="flex flex-wrap gap-[2vw] justify-center border-b border-gray-300">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`px-6 py-2 text-[15px] font-semibold transition duration-300 ${activeTab === tab.id
                                                ? "text-primary border-b-2 border-primary"
                                                : "text-gray-500 hover:text-primary"
                                                }`}
                                        >
                                            {tab.title}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab Content */}
                                <div className=" pt-[5vh]">
                                    {tabs.find((tab) => tab.id === activeTab)?.content}
                                </div>
                            </div>
                        </section>


                        {/* atouts */}
                        <section className='lg:px-[10vw] px-[7vw] lg:py-[10vh] py-[5vh] font-baloo bg-primary/10'>
                            <p className=" text-likeblack font-sans  text-center text-[19px] uppercase font-bold  pb-2 ">Nos atouts</p>
                            <p className='text-accent   text-center text-[14px] uppercase font-bold lg:pb-[5vh] pb-[3vh] '>Succès de haut niveau !</p>
                            <Carousel/>

                        </section>
                        
                    </section>
                </section>
            </div>

        </>
    );
};

export default Main;
import React from 'react'
import HeroImage from "../assets/heroImage.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'
import { AiOutlineArrowUp } from "react-icons/ai";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full gap-10">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                I'm a Front End Developer
                </h2>
                <p className="text-gray-500 max-w-md">
                I have 2 years of experience building and desgining
                UserInterfaces. Currently, I love to work on web application using
                technologies like React, Tailwind, Next JS and Bootstrap.
                </p>

                <div>
                <Link to='portfolio' smooth duration={800}>
                    <a
                    href="portfolio"
                    className="group w-fit px-6 py-3 flex items-center gap-1 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    >
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} />
                    </span>
                    </a>
                </Link>
                </div>
            </div>
            <div className="">
                <img
                src={HeroImage}
                alt="My Self"
                className="rounded-xl mx-auto w-2/3 md:w-full"
                />
            </div>
            </div>

            <Link to="home" smooth duration={800}>
            <a
                href="/#"
                className="p-3 rounded-full z-10 fixed bottom-4 right-4 bg-transparent border-2 border-yellow-600 shadow-md shadow-stone-500  "
            >
                <AiOutlineArrowUp size={30} className="translate-y-1 animate-spin" />
            </a>
            </Link>
        </div>
    );
}

export default Home
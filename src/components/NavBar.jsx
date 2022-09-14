import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-5 z-10">
            <div>
            <Link to="home" smooth duration={500}>
                <a href="/">
                <h1 className="font-vibes text-3xl ml-2">Mr.RoboT</h1>
                </a>
            </Link>
            </div>

            <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
                <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-white duration-200"
                >
                <Link to={link} smooth duration={800}>
                    {link}
                </Link>
                </li>
            ))}
            </ul>

            <div
            onClick={() => setNav(!nav)}
            className="md:hidden text-2xl cursor-pointer pr-4 z-10 text-gray-400"
            >
            {nav ? (
                <FontAwesomeIcon icon={faTimes} />
            ) : (
                <FontAwesomeIcon icon={faBars} />
            )}
            </div>

            {nav && (
            <ul
                className="flex flex-col justify-center items-center absolute
                        top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 gap-10 text-gray-400"
            >
                {links.map(({ id, link }) => (
                <li
                    key={id}
                    className="px-4 cursor-pointer capitalize text-4xl hover:text-white hover:scale-105 duration-200"
                >
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={800}>{link}</Link>
                </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default NavBar
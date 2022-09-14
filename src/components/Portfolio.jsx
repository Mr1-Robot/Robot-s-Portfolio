import React from 'react'
import ArrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: ArrayDestruct,
            href: "https://codepen.io/rpichioli/pen/JBEzPp",
        },
        {
            id: 2,
            src: installNode,
            href: "https://blog.codepen.io/2017/08/11/using-resources-npm-codepen/",
        },
        {
            id: 3,
            src: navbar,
            href: "https://codepen.io/hitensharma/pen/dybryGE",
        },
        {
            id: 4,
            src: reactParallax,
            href: "https://codepen.io/jscottsmith/pen/eREbwz",
        },
        {
            id: 5,
            src: reactSmooth,
            href: "https://codepen.io/giannotr/pen/GPgKpK",
        },
        {
            id: 6,
            src: reactWeather,
            href: "https://codepen.io/jon_tay/pen/aaqdZL",
        },
        ];

        return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen p-4"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
                </p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({ id, src, href }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                    />
                    <div className="flex items-center justify-center">
                    <a
                        href={href}
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150"
                    >
                        Demo
                    </a>
                    <a
                        href="https://Github.com/Mr1-Robot"
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150"
                    >
                        Code
                    </a>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default Portfolio
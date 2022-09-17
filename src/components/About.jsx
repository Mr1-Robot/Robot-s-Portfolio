import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-10">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                About
                </p>
            </div>

            <p className="text-xl mt-20">
                Front-end Developer completed 3 - 4 projects in CompuTIQ company,
                UI/UX designer with FIGMA. Worked in the Social Media Marketing
                “Facebook, Instagram” and managed campaigns with a good result in
                sailing and designing for each page like logos, post content, and
                specific words.
            </p>

            <br />

            <p className="text-xl">
                Worked in the Fajr-Baghdad company in marketing and managing their
                social media accounts and campaigns.
            </p>
            </div>
        </div>
    );
}

export default About
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
      {
        id: 1,
        child: (
          <>
            Linkedin <FaLinkedin size={30} />
          </>
        ),
        href: "https://linkedin.com/in/mr1robot",
        style: "rounded-tr-md",
      },
      {
        id: 2,
        child: (
          <>
            GitHub <FaGithub size={30} />
          </>
        ),
        href: "https://github.com/Mr1-Robot",
      },
      {
        id: 3,
        child: (
          <>
            Mail <HiOutlineMail size={30} />
          </>
        ),
        href: "mailto: robotmr969@gmail.com",
      },
      {
        id: 4,
        child: (
          <>
            Resume <BsFillPersonLinesFill size={30} />
          </>
        ),
        href: `/Muammar_Mohammed_CV.pdf`,
        style: "rounded-br-md",
        download: true,
      },
    ];

    return (
        <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
            <ul>
            {links.map(({ id, child, href, style, download }) => (
                <li key={id} className={`flex items-center w-40 h-14 px-4 bg-slate-600 ml-[-100px] hover:ml-0 duration-[400ms] text-white text-xl font-light ${style}`}>
                    <a
                        href={href}
                        className="flex items-center justify-between w-full"
                        download={download}
                        target="_blank"
                        rel='noreferrer'
                    >
                        {child}
                    </a>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default SocialLinks
import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-10'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt vero iusto assumenda architecto sint. Ducimus aliquam libero cumque quo soluta itaque odit non quasi nostrum velit, pariatur eos tempora saepe vitae? Nemo magni laborum natus quod facere reprehenderit aliquam, esse, incidunt quis libero pariatur nulla ut cupiditate omnis voluptatem nesciunt!
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque quis, voluptate cumque animi error aut? Cupiditate distinctio aut, quas qui explicabo perferendis vel voluptatum nostrum soluta assumenda numquam consequuntur optio necessitatibus exercitationem possimus sit quia. Eum eligendi iure eos ullam aperiam inventore rerum reiciendis veniam nisi? Nihil, atque ipsum!
                </p>
            </div>
        </div>
    )
}

export default About
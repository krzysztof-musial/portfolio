import React from 'react'
import Orbs from '../assets/Orbs.png'

const Home = () => {
    return (
        <div className="flex flex-col space-y-12 items-center">
            <div  className="w-full flex flex-col space-y-3 items-center relative">
                <p className="font-serif text-3xl font-bold z-10">Projects</p>
                <p className="text-xs text-portfolio-secondary opacity-75 z-10">
                    Check out my recent work. Find more on my <a href="https://github.com/krzysztofpiotrmusial" target="_blank" rel="noreferrer" className="text-portfolio-primary underline opacity-75">GitHub</a>.
                </p>
                <img src={Orbs} alt="orbs" className="absolute -top-20 mr-16 z-0" draggable="false" style={{ pointerEvents: 'none' }} />
            </div>
            {/* Gallery */}
            <div>
                <div 
                    className="bg-portfolio-front rounded-lg"
                    style={{ width: '216px', height: '216px' }}
                >

                </div>
            </div>
        </div>
    )
}

export default Home

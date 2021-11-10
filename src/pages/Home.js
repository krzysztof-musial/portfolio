import React, { useState, useEffect } from 'react'
import Orbs from '../assets/Orbs.png'
import Thumbnail from '../components/Thumbnail'
import { projects } from '../database'

const Home = () => {
    return (
        <div className="py-8 flex flex-col space-y-12 items-center">
            <div  className="w-full flex flex-col space-y-3 items-center relative">
                <p className="font-serif text-3xl font-bold z-10">Projects</p>
                <p className="text-xs text-portfolio-secondary opacity-75 z-10">
                    Check out my recent work. Find more on my <a href="https://github.com/krzysztofpiotrmusial" target="_blank" rel="noreferrer" className="text-portfolio-primary underline opacity-75">GitHub</a>.
                </p>
                <img src={Orbs} alt="orbs" className="absolute -top-20 mr-16 z-0" draggable="false" style={{ pointerEvents: 'none' }} />
            </div>
            <Projects />
        </div>
    )
}

const Projects = () => {
    const [projectsList, setProjectsList] = useState([])

    useEffect(() => {
        setProjectsList(projects.reverse())
    }, [])

    return (
        <div className="
            w-full grid 
            grid-cols-1 gap-8
            xs:grid-cols-2 xs:gap-8
            sm:grid-cols-3 sm:gap-8
            md:grid-cols-3 md:gap-8
            lg:grid-cols-4 lg:gap-8
        ">
            {projectsList.map((project) => (
                <Thumbnail key={project.id} project={project} />
            ))}
        </div>
    )
}

export default Home

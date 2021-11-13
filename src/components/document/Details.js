import React from 'react'
import Orbs from '../../assets/Orbs.png'

const Details = ({ project }) => {
    return (
        <div 
            className="w-full flex items-center justify-between py-4"
            style={{
                background: `no-repeat url(${Orbs}) -130px calc(50% + 10px), no-repeat url(${Orbs}) calc(100% + 130px) center`,
            }}
        >
            <div className="h-full w-1 bg-portfolio-primary rounded"></div>
            <Info project={project} />
            <div className="h-full w-1 bg-portfolio-primary rounded"></div>
        </div>
    )
}

const Info = ({ project }) => {
    return (
        <>
            {project ?
                <div className="px-4 flex flex-col items-center space-y-2 text-portfolio-primary text-center">
                    <p className="text-sm">{project.date}</p>
                    <p className="text-3xl font-serif font-bold text-white">{project.title}</p>
                    <p className="opacity-75 font-light">{project.subtitle}</p>
                    {project.links &&
                        <div className="flex space-x-4 items-center pt-4">
                            {project.links.map((link) => (
                                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="text-xs hover:underline">{link.name}</a>
                            ))}
                        </div>
                    }
                </div>
            :
                <div>No details</div>
            }
        </>
    )
}

export default Details
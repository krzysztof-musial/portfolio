import React from 'react'

const Thumbnail = ({ project }) => {
    return (
        <div 
            className={`relative rounded-lg overflow-hidden ${project.thumbnail.theme === 'dark' ? 'bg-portfolio-front' : 'bg-gray-100'}`}
            style={{ width: '100%', height: '100%', aspectRatio: '1/1' }}
            // style={{ width: '216px', height: '216px' }}
        >
            <div className={`absolute top-0 left-0 z-10 w-full h-full p-4 flex flex-col justify-end ${project.thumbnail.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <p className="text-xs opacity-75">{ project.category }</p>
                <p className="text-lg font-medium">{ project.name }</p>
            </div>
            <div className="w-full h-full">
                {project.thumbnail.src}
            </div>
        </div>
    )
}

export default Thumbnail
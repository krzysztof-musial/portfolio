import React from 'react'

const Image = ({ image }) => {

    return (
        <div className="py-4">
            <a 
                href={image.src} 
                target="_blank" rel="noreferrer" 
                className="w-full relative"
            >
                <img 
                    src={image.src} 
                    alt={image.alt} 
                    draggable="false" 
                />
            </a>
        </div>
    )
}

export default Image
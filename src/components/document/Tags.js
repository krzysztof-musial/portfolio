import React from 'react'

const Tags = ({ project }) => {
    return (
        <div className="py-4">
            <div className="pt-4 border-t border-portfolio-border flex flex-wrap">
                {project.tags?.map(tag => (
                    <div key={tag} className="py-1 px-2 mb-4 mr-4 rounded border border-portfolio-secondary text-portfolio-secondary text-xs">{ tag }</div>
                ))}
            </div>
        </div>
    )
}

export default Tags
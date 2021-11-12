import React from 'react'

const Tags = ({ project }) => {
    return (
        <div className="pt-4 border-t border-portfolio-border flex space-x-4">
            {project.tags?.map(tag => (
                <div key={tag} className="py-1 px-2 rounded border border-portfolio-secondary text-portfolio-secondary text-xs">{ tag }</div>
            ))}
        </div>
    )
}

export default Tags
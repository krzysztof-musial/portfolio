import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ links, project }) => {
    return (
        <div className="w-full flex items-center justify-between border-b border-portfolio-border text-xs pb-2 text-portfolio-secondary">
            <div className="flex items-center space-x-2">
                <Link to="/" className="hover:underline">Home</Link>
                {links.map(link => (
                    <div key={link.name} className="flex items-center space-x-2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.6 5.24499L6.615 4.25999L5.01 2.65499C4.67 2.31999 4.09 2.55999 4.09 3.03999V6.15499V8.95999C4.09 9.43999 4.67 9.67999 5.01 9.33999L7.6 6.74999C8.015 6.33999 8.015 5.65999 7.6 5.24499Z" fill="#6B81A3"/>
                        </svg>
                        <Link to={link.url} className="hover:underline">{link.name}</Link>
                    </div>
                ))}
                <div className="flex items-center space-x-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.6 5.24499L6.615 4.25999L5.01 2.65499C4.67 2.31999 4.09 2.55999 4.09 3.03999V6.15499V8.95999C4.09 9.43999 4.67 9.67999 5.01 9.33999L7.6 6.74999C8.015 6.33999 8.015 5.65999 7.6 5.24499Z" fill="#6B81A3"/>
                    </svg>
                    <Link to={`/project/${project?.id}`} className="hover:underline text-portfolio-primary">{project?.id}</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation
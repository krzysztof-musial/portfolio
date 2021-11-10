import React from 'react'

const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center text-xs opacity-50 text-center">
            <p className="text-portfolio-primary mb-2">Krzysztof Musiał, 2021</p>
            <p className="text-portfolio-secondary">Bachelor of Computer Science, Web Developer and enthusiast of minimalist design.</p>
            <p className="text-portfolio-secondary">I am open to job offers, contact me <a href="mailto:krzysztofpiotrmusial@gmail.com" target="_blank" rel="noreferrer" className="text-portfolio-primary opacity-60 hover:underline">here</a> or send me a message on <a href="https://linkerid.com/in/krzysztofpiotrmusial" target="_blank" rel="noreferrer" className="text-portfolio-primary opacity-60 hover:underline">LinkedIn</a>.</p>
            <p className="text-portfolio-secondary">Don’t forget to check out my <a href="https://github.com/krzysztofpiotrmusial" target="_blank" rel="noreferrer" className="text-portfolio-primary opacity-60 hover:underline">GitHub</a> repository.</p>
        </div>
    )
}

export default Footer
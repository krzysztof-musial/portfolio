import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../database'
import Document from '../components/document/Document'
import Navigation from '../components/Navigation'
import Details from '../components/document/Details'
import Tags from '../components/document/Tags'
import Heading from '../components/document/Heading'
import Paragraph from '../components/document/Paragraph'
import Image from '../components/document/Image'

const Project = () => {
    let params = useParams();
    const [project, setProject] = useState({})
    const links = [
        {
            name: 'Projects',
            url: '/'
        }
    ]

    useEffect(() => {
        projects.forEach(project => {
            if (project.id === params.id) {
                setProject(project)
            }
        })
    })

    return (
        <Document>
            <Navigation links={links} project={project} />
            <Details project={project} />
            {project.document?.map((section) => (
                <div key={section.id} className="w-full">
                    {section.type === 'image' && <Image image={section.content} />}
                    {section.type === 'heading' && <Heading>{ section.content }</Heading>}
                    {section.type === 'paragraph' && <Paragraph>{ section.content }</Paragraph>}
                </div>
            ))}
            <Tags project={project} />
        </Document>
    )
}

export default Project
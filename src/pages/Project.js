import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../database'
import Document from '../components/document/Document'
import Navigation from '../components/Navigation'
import Details from '../components/document/Details'
import Tags from '../components/document/Tags'

const Project = () => {
    let params = useParams();
    const [project, setProject] = useState({})
    const links = [
        {
            name: 'Project',
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
            <Tags project={project} />
        </Document>
    )
}

export default Project
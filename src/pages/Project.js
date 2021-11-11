import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../database'
import Document from '../components/document/Document'
import Details from '../components/document/Details'

const Project = () => {
    let params = useParams();
    const [project, setProject] = useState()

    useEffect(() => {
        projects.forEach(project => {
            if (project.id === params.id) {
                setProject(project)
            }
        })
    })

    return (
        <Document>
            <Details project={project} />
        </Document>
    )
}

export default Project
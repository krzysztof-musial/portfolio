import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../database'

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
        <div>
            Project {project?.name}
        </div>
    )
}

export default Project
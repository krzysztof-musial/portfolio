import { ReactComponent as Labirynt } from './assets/thumbnails/labirynt.svg'
import { ReactComponent as Internapp } from './assets/thumbnails/internapp.svg'
import { ReactComponent as Wms } from './assets/thumbnails/wms.svg'
import { ReactComponent as Portfolio } from './assets/thumbnails/portfolio.svg'

const projects = [
    {
        id: 1,
        date: 'Julember 1, 2020',
        name: 'Labirynt',
        category: 'Javascript',
        thumbnail: {
            src: <Labirynt className="w-full h-full" />,
            alt: '',
            theme: 'dark'
        }
    },
    {
        id: 2,
        date: 'Julember 1, 2020',
        name: 'Intern App',
        category: 'Laravel',
        thumbnail: {
            src: <Internapp className="w-full h-full" />,
            alt: '',
            theme: 'light'
        }
    },
    {
        id: 3,
        date: 'Julember 1, 2020',
        name: 'WMS',
        category: 'Angular',
        thumbnail: {
            src: <Wms className="w-full h-full" />,
            alt: '',
            theme: 'dark'
        }
    },
    {
        id: 4,
        date: 'Julember 1, 2020',
        name: 'Portfolio',
        category: 'React',
        thumbnail: {
            src: <Portfolio className="w-full h-full" />,
            alt: '',
            theme: 'dark'
        }
    },
]

export { projects }
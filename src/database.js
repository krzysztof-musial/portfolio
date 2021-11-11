import { ReactComponent as Labirynt } from './assets/thumbnails/labirynt.svg'
import { ReactComponent as Internapp } from './assets/thumbnails/internapp.svg'
import { ReactComponent as Wms } from './assets/thumbnails/wms.svg'
import { ReactComponent as Portfolio } from './assets/thumbnails/portfolio.svg'

const projects = [
    {
        id: 'portfolio',
        date: 'Listopad 11, 2021',
        title: 'Portfolio',
        subtitle: 'Moje miejsce w sieci',
        category: 'React',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/krzysztofpiotrmusial/portfolio'
            },
            {
                name: 'Website',
                url: 'https://krzysztofmusial.com/'
            },
        ],
        thumbnail: {
            src: <Portfolio className="w-full h-full" />,
            alt: '',
            theme: 'dark'
        }
    },
    {
        id: 'wms',
        date: 'Julember 1, 2020',
        title: 'Warehouse Menagement System',
        subtitle: 'Moje miejsce w sieci',
        category: 'Angular',
        thumbnail: {
            src: <Wms className="w-full h-full" />,
            alt: '',
            theme: 'dark'
        }
    },
    {
        id: 'intern-app',
        date: 'Julember 1, 2020',
        title: 'Intern App',
        subtitle: 'Moje miejsce w sieci',
        category: 'Laravel',
        thumbnail: {
            src: <Internapp className="w-full h-full" />,
            alt: '',
            theme: 'light'
        }
    },
    {
        id: 'labirynt',
        date: 'Julember 1, 2020',
        title: 'Labirynt / Maze',
        subtitle: 'Moje miejsce w sieci',
        category: 'Javascript',
        thumbnail: {
            src: <Labirynt className="w-full h-full" />,
            alt: '',
            theme: 'dark'
        }
    },
]

export { projects }
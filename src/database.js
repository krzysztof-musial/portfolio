import { ReactComponent as Labirynt } from './assets/thumbnails/labirynt.svg'
import { ReactComponent as Internapp } from './assets/thumbnails/internapp.svg'
import { ReactComponent as Wms } from './assets/thumbnails/wms.svg'
import { ReactComponent as Portfolio } from './assets/thumbnails/portfolio.svg'
import portfoliohero from './assets/heros/portfolio.png'
import wmshero from './assets/heros/wms.png'
import internapphero from './assets/heros/internapp.png'
import labirynthero from './assets/heros/labirynt.png'

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
        },
        document: [
            {
                id: 1,
                type: 'image',
                content: {
                    src: portfoliohero,
                    alt: 'hero'
                }
            },
            // {
            //     id: 2,
            //     type: 'heading',
            //     content: 'O projekcie'
            // },
            // {
            //     id: 3,
            //     type: 'paragraph',
            //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem at vulputate nulla quis. Euismod montes, in urna morbi. Feugiat varius fusce vestibulum cras feugiat habitant amet. Orci eu adipiscing dis tellus. Feugiat tellus nulla cursus sed cursus ut feugiat. Lobortis gravida congue massa turpis varius quisque arcu. Sed egestas magna lectus tellus nunc lectus vestibulum id. Augue lacus risus lacus, tellus, ipsum tristique hendrerit cras velit. Tortor dictumst accumsan, neque iaculis sem.'
            // }
        ],
        tags: ['React', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'Firebase']
    },
    {
        id: 'wms',
        date: 'Lipiec 1, 2021',
        title: 'Warehouse Menagement System',
        subtitle: 'System Zarządzania Magazynem',
        category: 'Angular',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/krzysztofpiotrmusial/wms'
            }
        ],
        thumbnail: {
            src: <Wms className="w-full h-full" />,
            alt: '',
            theme: 'dark'
        },
        document: [
            {
                id: 1,
                type: 'image',
                content: {
                    src: wmshero,
                    alt: 'hero'
                }
            },
            {
                id: 2,
                type: 'heading',
                content: 'Praca inżynierska'
            },
            {
                id: 3,
                type: 'paragraph',
                content: 'Aplikacja internetowa systemu zarządzania magazynem wykonana w ramach pracy inżynierskiej. Celem projektu było dostarczenie konsumentowi rozwiązania umożliwiającego w sposób wygodny i intuicyjny zarządzanie składowanymi przez niego dobrami. Wykorzystanie nowoczesnych rozwiązań oferowanych przez usługi chmurowe pozwaliło stworzyć łatwo skalowalne rozwiązanie dostępne przez Internet z każdego miejsca i każdego urządzenia podłączonego do sieci.'
            }
        ],
        tags: ['Angular', 'HTML', 'CSS', 'JavaScript', 'node.js', 'C#']
    },
    {
        id: 'intern-app',
        date: 'Czerwiec 1, 2021',
        title: 'Intern App',
        subtitle: 'Moje miejsce w sieci',
        category: 'Laravel',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/krzysztofpiotrmusial/intern-app'
            }
        ],
        thumbnail: {
            src: <Internapp className="w-full h-full" />,
            alt: '',
            theme: 'light'
        },
        document: [
            {
                id: 1,
                type: 'image',
                content: {
                    src: internapphero,
                    alt: 'hero'
                }
            },
            {
                id: 2,
                type: 'heading',
                content: 'O projekcie'
            },
            {
                id: 4,
                type: 'paragraph',
                content: 'Projekt portalu rekrutacyjnego zrealizowanego w ramach praktyk w trybie pracy zdalnej. W zakres moich obowiązków wchodziło zbudowanie od podstaw aplikacji internetowej, w tym: zaprojektowanie i wdrożenie struktury relacyjnej bazy danych, stworzenie backendu według wzorca MVC, zaprojektowanie i implementację frontendu, a także nadzorowanie, kontrolowanie i współpraca z przydzielonym do mojego zespołu studentem.'
            },
            {
                id: 5,
                type: 'paragraph',
                content: 'Celem projektu było stworzenie portalu rekrutacyjnego dla studentów szukających praktyk, stażu lub pierwszej pracy. Aplikacja internetowa miała umożliwiać rejestrację konta studenckiego i firmowego, zarządzanie kontem i personalizację profilu, tworzenie oraz edycję ofert pracy a także dodawanie ofert do ulubionych, wysłanie zgłoszenia, przeglądanie kandydatów i pisanie artykułów o charakterze poradników w prostym systemie blogowym.'
            },
            {
                id: 6,
                type: 'paragraph',
                content: 'Realizacja projektu wymagała ode mnie nauczenia się w krótkim czasie nowego frameworka Laravel. Oprócz tego poznałem w praktyce wzorzec Model-View-Controler, jak również nauczyłem się projektować złożone relacje bazy danych wraz z migracjami i seederami.'
            }
        ],
        tags: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'phpMyAdmin', 'XAMPP']
    },
    {
        id: 'labirynt',
        date: 'Styczeń 1, 2021',
        title: 'Labirynt / Maze',
        subtitle: 'Moje miejsce w sieci',
        category: 'Javascript',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/krzysztofpiotrmusial/maze'
            },
            {
                name: 'Website',
                url: 'https://km-maze.web.app/play/c7ZflXu1bKLqimT0WlFW'
            },
            {
                name: 'Dokumentacja',
                url: 'https://km-maze.web.app/'
            }
        ],
        thumbnail: {
            src: <Labirynt className="w-full h-full" />,
            alt: '',
            theme: 'dark'
        },
        document: [
            {
                id: 1,
                type: 'image',
                content: {
                    src: labirynthero,
                    alt: 'hero'
                }
            },
            {
                id: 2,
                type: 'heading',
                content: 'O projekcie'
            },
            {
                id: 3,
                type: 'paragraph',
                content: 'Projekt aplikacji wykorzystującej iteracyjny algorytm uczeniowy na przykładzie gry w labirynt. Wykonany w języku TypeScript/JavaScript we frameworku Angular jako zaliczenie przedmiotu Metody Sztucznej Inteligencji na studiach.'
            }
        ],
        tags: ['HTML', 'CSS', 'Angular', 'TypeScript', 'JavaScript', 'Firebase']
    },
]

export { projects }
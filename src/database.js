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
        subtitle: 'System Zarz??dzania Magazynem',
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
                content: 'Praca in??ynierska'
            },
            {
                id: 3,
                type: 'paragraph',
                content: 'Aplikacja internetowa systemu zarz??dzania magazynem wykonana w ramach pracy in??ynierskiej. Celem projektu by??o dostarczenie konsumentowi rozwi??zania umo??liwiaj??cego w spos??b wygodny i intuicyjny zarz??dzanie sk??adowanymi przez niego dobrami. Wykorzystanie nowoczesnych rozwi??za?? oferowanych przez us??ugi chmurowe pozwali??o stworzy?? ??atwo skalowalne rozwi??zanie dost??pne przez Internet z ka??dego miejsca i ka??dego urz??dzenia pod????czonego do sieci.'
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
                content: 'Projekt portalu rekrutacyjnego zrealizowanego w ramach praktyk w trybie pracy zdalnej. W zakres moich obowi??zk??w wchodzi??o zbudowanie od podstaw aplikacji internetowej, w tym: zaprojektowanie i wdro??enie struktury relacyjnej bazy danych, stworzenie backendu wed??ug wzorca MVC, zaprojektowanie i implementacj?? frontendu, a tak??e nadzorowanie, kontrolowanie i wsp????praca z przydzielonym do mojego zespo??u studentem.'
            },
            {
                id: 5,
                type: 'paragraph',
                content: 'Celem projektu by??o stworzenie portalu rekrutacyjnego dla student??w szukaj??cych praktyk, sta??u lub pierwszej pracy. Aplikacja internetowa mia??a umo??liwia?? rejestracj?? konta studenckiego i firmowego, zarz??dzanie kontem i personalizacj?? profilu, tworzenie oraz edycj?? ofert pracy a tak??e dodawanie ofert do ulubionych, wys??anie zg??oszenia, przegl??danie kandydat??w i pisanie artyku????w o charakterze poradnik??w w prostym systemie blogowym.'
            },
            {
                id: 6,
                type: 'paragraph',
                content: 'Realizacja projektu wymaga??a ode mnie nauczenia si?? w kr??tkim czasie nowego frameworka Laravel. Opr??cz tego pozna??em w praktyce wzorzec Model-View-Controler, jak r??wnie?? nauczy??em si?? projektowa?? z??o??one relacje bazy danych wraz z migracjami i seederami.'
            }
        ],
        tags: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'phpMyAdmin', 'XAMPP']
    },
    {
        id: 'labirynt',
        date: 'Stycze?? 1, 2021',
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
                content: 'Projekt aplikacji wykorzystuj??cej iteracyjny algorytm uczeniowy na przyk??adzie gry w labirynt. Wykonany w j??zyku TypeScript/JavaScript we frameworku Angular jako zaliczenie przedmiotu Metody Sztucznej Inteligencji na studiach.'
            }
        ],
        tags: ['HTML', 'CSS', 'Angular', 'TypeScript', 'JavaScript', 'Firebase']
    },
]

export { projects }
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Sidebar = ({ projects }) => {
    const [display, setDisplay] = useState([])
    const [filter, setFilter] = useState('')
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [toggle, setToggle] = useState(true)

    const router = useRouter()

    //filter projects based on search input
    useEffect(() => {
        const temp = { ...projects }
        Object.keys(projects).forEach(category => {
            temp[category] = temp[category].filter(project => project.filename.toLowerCase().includes(filter.toLowerCase()))
        })
        setFilteredProjects(temp)
    }, [projects, filter])

    useEffect(() => {
        const windowSize = () => window.innerWidth < 768 ? setToggle(false) : setToggle(true);
        window.addEventListener(
            'resize',
            windowSize
        );
    }, [])

    const handleClick = () => window.innerWidth < 768 && setToggle(false)

    return (
        <>
            {
                !toggle && <div>
                    <button
                        className="absolute h-24 top-0 right-6 md:hidden"
                        onClick={() => setToggle(true)}
                    >
                        MENU
                    </button>
                </div>
            }
            {toggle && <div className="
            fixed 
            left-0 
            top-0
            md:top-28 
            w-full 
            md:w-72 
            h-screen 
            md:max-h-[82%] 
            md:pb-12
            border-none
            md:border-solid
            border-r-2 
            text-left 
            px-8 
            bg-white
            overflow-y-scroll 
            overscroll-contain
            "
            >
                <div className="flex flex-col">
                    <div className="w-100 flex flex-row items-center justify-between md:justify-between">
                        <div className="flex justify-start items-center">
                            <div className="mr-4">&#128269;</div>
                            <input
                                type="text"
                                className="my-4 border-2 w-100 md:w-88"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                        </div>
                        <button
                            className="flex md:hidden"
                            onClick={() => setToggle(false)}
                        >
                            &#x2715;
                        </button>
                    </div>
                    <hr className="mt-2 mb-4" />
                    {
                        filteredProjects && Object.keys(filteredProjects).map(category => {
                            return filteredProjects[category].length > 0 && (
                                <div
                                    key={category}
                                    className="my-1"
                                >
                                    <button
                                        onClick={() => {
                                            setDisplay(prev => {
                                                const idx = prev.indexOf(category)
                                                return idx === -1
                                                    ? [...prev, category]
                                                    : [...prev].filter(item => item !== category)
                                            })
                                        }}
                                    >
                                        {category}
                                    </button>
                                    <div className="flex flex-col mt-2 ml-2">
                                        {
                                            display.indexOf(category) !== -1 && filteredProjects[category].map(project => (
                                                <span key={project.filename} className="flex flex-row items-center justify-start">
                                                    <div className="mx-2">-</div> <button
                                                        className="my-1 text-left"
                                                        onClick={() => {
                                                            router.push(project.path)
                                                            handleClick()
                                                        }}
                                                    >
                                                        {project.filename}
                                                    </button>
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            }
        </>
    )
}

export default Sidebar
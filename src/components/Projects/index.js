import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
                <h2>
                    Personal Portfolio Website (React.js, HTML, CSS)
                </h2>
                <ul>
                    <li>
                    Developed and designed this personal portfolio website with HTML, CSS, and React.js with descriptions of all the projects I have worked on. 
                    </li>
                    <li>
                    Integrated interactive features and dynamic content to enhance user engagement and experience.
                    </li>
                    <li>
                    Implemented advanced animation techniques to enhance user experience.
                    </li>
                </ul>

                <h2>
                    Stock Exchange Simulation (Java)
                </h2>
                <ul>
                    <li>
                    Designed an Object-Oriented Trading System in Java, leveraging Singleton, Facade, Flyweight, and Observer design patterns for efficient user, product, and market data management. 
                    </li>
                    <li>
                    Optimized memory and performance by implementing Flyweight Pattern to minimize redundant Price objects. 
                    </li>
                    <li>
                    Developed a real-time Market Publication System, allowing users to subscribe/unsubscribe and receive live updates through the Observer Pattern. 
                    </li>
                    <li>
                    Applied robust exception handling and validation, ensuring error-free transactions and system reliability.
                    </li>
                     <li>
                    Implemented scalable and maintainable architecture by applying Java OOP principles like encapsulation, polymorphism, and interface-based design. 
                    </li>
                </ul>

                <h2>
                    YouTube Clone - Video Sharing Platform (Cloud, Next.js, Firebase)
                </h2>
                <ul>
                    <li>
                    Built a scalable YouTube clone with video upload, processing, and playback using cloud architecture. 
                    </li>
                    <li>
                    Enabled authenticated video uploads with Google Cloud Storage and signed URLs for secure file handling. 
                    </li>
                    <li>
                    Developed a video processing pipeline using Pub/Sub, Cloud Run, and FFmpeg for transcoding. 
                    </li>
                    <li>
                    Created a Next.js client with Firebase Authentication and Firestore for video metadata retrieval. 
                    </li>
                </ul>
                
                <h2>
                    Personal Finance Tracker (Python, Matplotlib)
                </h2>
                <ul>
                    <li>
                    Built Python-based CLI tool to tracking & analyze personal finances, automating expense categorization from CSV files. 
                    </li>
                    <li>
                    Generated data visualizations using bar and pie charts to summarize trends & category distributions using Matplotlib.
                    </li>
                    <li>
                    Developed interactive features, enabling users to relabel categories, view transaction breakdowns, & filter data. 
                    </li>
                    <li>
                    Provided insights like monthly savings, largest spending categories, and trend analysis for informed decision-making. 
                    </li>
                </ul>

                <h2>
                    Todo App (React.js, Node.js, MongoDB)
                </h2>
                <ul>
                    <li>
                    Developed full-stack web app with React.js, Node.js, and MongoDB, with JWT authentication and CRUD functionality. 
                    </li>
                    <li>
                    Built a RESTful API with secure user session management. 
                    </li>
                    <li>
                    Deployed on Netlify (frontend) and Render (backend) with CORS policies and environment variables for security. 
                    </li>
                    <li>
                    Applied error handling, validation, and tested backend routes using Thunder Client. 
                    </li>
                </ul>
                <h2>
                    Connect 4 Game Implementation in Java
                </h2>

                <ul>
                    <li>
                    Developed a Connect 4 game class in Java, allowing two players to play on a 7x6 grid
                    </li>
                    <li>
                    Implemented methods to determine the current player, make moves, and check the game status for a win, draw, or undecided outcome
                    </li>
                    <li>
                    Utilized 2D array to represent board, implementing logic to check for 4 in a row vertically, horizontally, & diagonally
                    </li>
                    <li>
                    Designed a toString method to visualize the game board state, aiding in debugging and user interface display
                    </li>
                </ul>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#4584b6' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJava} color='#FF0000' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Projects
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
                    Personal Portfolio Website using React.js, HTML, & CSS
                </h2>

                <ul>
                    <li>
                    Developed and designed this personal portfolio website using HTML, CSS, and React.js 
                    </li>
                    <li>
                    Integrated interactive features and dynamic content to enhance user engagement and experience
                    </li>
                    <li>
                    Implemented advanced animation techniques to enhance user experience
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

                <h2>
                    Sorted Integer Set Implementation in Java
                </h2>

                <ul>
                    <li>
                    Developed a Java implementation of a Sorted Integer Set data structure using a singly-linked list
                    </li>
                    <li>
                    Implemented methods for adding, removing, and checking membership of integers in the set
                    </li>
                    <li>
                    Implemented operations for computing the union, intersection, subset, and equality between two sets
                    </li>
                </ul>

                <h2>
                    Combining Stack & Queue Functionality in Java
                </h2>
                <ul>
                <li>
                reated a Deque (Double-Ended Queue) data structure in Java, combining the functionalities of a stack and a queue
                </li>

                <li>
                Implemented push and pop operations at both ends of Deque, enabling efficient insertion and removal of elements
                </li>

                <li>
                Utilized doubly linked list design to maintain constant time complexity for operations, ensuring optimal performance
                </li>
                <li>
                Conducted rigorous testing to ensure the accuracy of the Deque implementation, including handling edge cases and maintaining data consistency
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
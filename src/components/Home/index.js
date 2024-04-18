import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/m-high-resolution-logo-transparent.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'a', 'z']
    const jobArray = ['A', 's', 'p', 'r', 'i', 'n', 'g', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15}/>                
                </h1>
                <h2>Computer Science major with a concentration in Software Development</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Home
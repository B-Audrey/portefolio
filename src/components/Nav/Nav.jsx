import { Link } from "react-router-dom";
import { useState } from "react";
import leftArrow from '../../assets/leftArrow.png';
import './Nav.scss';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen((previousValue) => !previousValue );
    return (
        <nav className="nav">
            <div className="nav__text">Menu</div>
            <button  onClick={handleClick} className={`nav__btn nav__btn${isOpen ? '--open' : '--close'}`}>
                <img src={leftArrow} alt="open or close"></img>
            </button>
            <ul className={`nav__bloc nav__bloc${isOpen ? '--open' : '--close'}`}>
                    <li><Link to="#contact">Contact</Link></li>
                    <li><Link to="#knowledge">Compétences</Link></li>
                    <li><Link to="#realisations">Réalisations</Link></li>
            </ul>
        </nav>
    
    )
}

export default Nav
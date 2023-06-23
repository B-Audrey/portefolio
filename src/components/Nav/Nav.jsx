import { useState } from "react";
import leftArrow from '../../assets/leftArrow.png';
import './Nav.scss';
import { HashLink } from "react-router-hash-link";

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
                <li><HashLink to="#profil">Profil</HashLink></li>
                <li><HashLink to="#competences">Compétences</HashLink></li>
                <li><HashLink to="#realisations">Réalisations</HashLink></li>
            </ul>
        </nav>
    
    )
}

export default Nav
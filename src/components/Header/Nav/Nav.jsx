import { useState } from "react";
import leftArrow from '../../../assets/leftArrow.png';
import './Nav.scss';
import { HashLink } from "react-router-hash-link";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen((previousValue) => !previousValue );
    return (
        <nav className="nav">
            <div onClick={handleClick} className="nav__text">Menu</div>
            <button  onClick={handleClick} className={`nav__btn nav__btn${isOpen ? '--open' : '--close'}`}>
                <img src={leftArrow} alt="open or close"></img>
            </button>
            <ul className={`nav__bloc nav__bloc${isOpen ? '--open' : '--close'}`}>
                <li><HashLink to="#profil"><i className="fa-solid fa-address-card"></i> &nbsp; Profil</HashLink></li>
                <li><HashLink to="#competences"><i className="fa-solid fa-laptop-code"></i>&nbsp; Compétences</HashLink></li>
                <li><HashLink to="#projets"><i className="fa-solid fa-file-code"></i>&nbsp; Projets</HashLink></li>
                <li><HashLink to="#contact" className="page__link"><i className="fa-solid fa-satellite-dish"></i>&nbsp; Contact</HashLink></li>
            </ul>
        </nav>
    
    )
}

export default Nav
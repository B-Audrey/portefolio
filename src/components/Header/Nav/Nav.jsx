import { useState } from "react";
import leftArrow from '../../../assets/leftArrow.png';
import './Nav.scss';
import { Link } from "react-scroll";

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
                <li><Link to="profil" smooth={true} duration={1000}><i className="fa-solid fa-address-card"></i> &nbsp; Profil</Link></li>
                <li><Link to="competences" smooth={true} duration={1000}><i className="fa-solid fa-laptop-code"></i>&nbsp; Compétences</Link></li>
                <li><Link to="projets" smooth={true} duration={1000}><i className="fa-solid fa-file-code"></i>&nbsp; Projets</Link></li>
                <li><Link to="contact" smooth={true} duration={1000}><i className="fa-solid fa-satellite-dish"></i>&nbsp; Contact</Link></li>
            </ul>
        </nav>
    
    )
}

export default Nav
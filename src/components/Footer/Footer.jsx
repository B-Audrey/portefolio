import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './Footer.scss';
import cv from '../../doc/CV_BONIS_Audrey.pdf'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__wrapper">
                <div className="footer__link">
                    <h4>Retrouver sa route</h4>
                    <HashLink to='/portefolio/#home'>
                        <i className="fa-solid fa-clock"></i>
                        &nbsp; Remonter le temps</HashLink>
                    <HashLink to="portefolio/#profil" className="page__link">
                        <i className="fa-solid fa-meteor"></i>
                        &nbsp; Atterrir sur mon profil
                    </HashLink>
                    <Link to="/portefolio/tictactoe" className="page__link">
                        <i className="fa-solid fa-table-cells-large"></i>
                        &nbsp; Jouer au morpion avec un collègue
                    </Link>
                    <HashLink to="/portefolio/#contact" className="page__link">
                        <i className="fa-solid fa-satellite-dish"></i>
                        &nbsp; Entrer en contact
                    </HashLink>
                </div>
                <div className="footer__link">
                    <h4>En savoir plus</h4>
                    <Link to="https://www.linkedin.com/in/audrey-bonis/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                        &nbsp; Consulter mon profil LinkedIn
                    </Link>
                    <Link to="https://github.com/B-Audrey" target="_blank">
                        <i className="fa-brands fa-github"></i>
                        &nbsp; Consulter mon repo Github
                    </Link>
                    <span>
                        <i className="fa-solid fa-file-arrow-down"></i>
                        &nbsp; <a href={cv} download>Téléchargez mon CV</a>
                    </span>
                </div>
                <div className="footer__link">
                    <h4>Mentions</h4>
                    <span className="mention">
                        <i className="fa-solid fa-image"></i>
                        <p>&nbsp; Images libres de droits</p>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
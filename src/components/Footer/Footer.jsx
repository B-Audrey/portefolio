import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './Footer.scss'

const Footer = ({cv}) => {
    return (
        <footer className='footer'>
                <div className="footer__link">
                    <h4>Naviguer</h4>
                    <HashLink to='#home'>
                        <i className="fa-solid fa-clock"></i>
                        &nbsp; Remonter le temps</HashLink>
                    <HashLink to="#informations" className="page__link">
                        <i className="fa-solid fa-meteor"></i>
                        &nbsp; Atterrir sur mon profil
                    </HashLink>
                    <Link to="/tictactoe" className="page__link">
                        <i className="fa-solid fa-table-cells-large"></i>
                        &nbsp; Jouer au morpion avec un collegue
                    </Link>
                    <Link to="#contact" className="page__link">
                        <i className="fa-solid fa-satellite-dish"></i>
                        &nbsp; Entrer en contact
                    </Link>
                </div>
                <div className="footer__link">
                    <h4>En savoir plus</h4>
                    <Link to="https://www.linkedin.com/in/audrey-bonis/">
                        <i className="fa-brands fa-linkedin"></i>
                        &nbsp; Consulter mon profil LinkedIn
                    </Link>
                    <Link to="https://github.com/B-Audrey">
                        <i class="fa-brands fa-github"></i>
                        &nbsp; Consulter mon repo Github
                    </Link>
                    <span>
                        <i class="fa-solid fa-file-arrow-down"></i>
                        &nbsp; <Link to={cv} download>Téléchargez mon CV</Link>
                    </span>
                </div>
                <div className="footer__link">
                    <h4>Mentions</h4>
                    <span className="mention">
                        <i class="fa-solid fa-image"></i>
                        <p>&nbsp; Images libres de droit :</p>
                        <Link to="http://www.freepik.com">Designed by catalyststuff / Freepik</Link>
                    </span>
                </div>
        </footer>
    )
}

export default Footer
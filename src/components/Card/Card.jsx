import { Link } from 'react-router-dom';
import photo from '../../assets/Audrey_mini.jpg';
import './Card.scss';

const Card = () => {
    return (
    <>
        <aside className="flipCard">
            <div className="flipCard__rotation">
                <div className="flipCard__front">
                    <img src={photo} alt="Bonis Audrey" className="flipCard__picture"></img>
                    <span className="flip_more_infos shadow-text">DÉCOUVREZ QUI JE SUIS</span>
                </div>
                <div className="flipCard__back">
                    <div className="flipCard__back--text">
                        <h4 className='backTitle'>BONIS Audrey</h4>
                        <h5>Mes Loisirs</h5>
                        <ul>
                            <li><i className="fa-solid fa-dice"></i>&nbsp; Jeux</li>
                            <li><i className="fa-solid fa-music"></i>&nbsp; Musique</li>
                            <li><i className="fa-solid fa-person-walking"></i>&nbsp; Promenades</li>
                        </ul>
                        <h5>Mes Valeurs</h5>
                        <ul>
                            <li><i className="fa-solid fa-check"></i>&nbsp; Honnêteté</li>
                            <li><i className="fa-solid fa-share-nodes"></i>&nbsp; Partage</li>
                            <li><i className="fa-solid fa-palette"></i>&nbsp; Créativité</li>
                        </ul>
                        <h5>Vous avez un projet web ?</h5>
                    </div>
                    <Link className="shadow-text" to='/contact'>CONTACTEZ-MOI</Link>
                </div>
            </div>
       </aside>
    </>
    )
}

export default Card
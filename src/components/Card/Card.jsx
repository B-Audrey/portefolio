import { Link } from 'react-router-dom';
import photo from '../../assets/Audrey_mini.jpg';
import './Card.scss';

const Card = () => {
    return (
    <>
        <aside class="flipCard">
                    <div class="flipCard__rotation">
                        <div class="flipCard__front">
                        <img src={photo} alt="Bonis Audrey" class="flipCard__picture"></img>
                            <span class="flip_more_infos shadow-text">DÉCOUVREZ QUI JE SUIS</span>
                        </div>
                        <div class="flipCard__back">
                            <div class="flipCard__back--text">
                                <h3>BONIS Audrey</h3>
                                <h4>Mes Loisirs</h4>
                                <ul>
                                    <li><i class="fa-solid fa-dice"></i>&nbsp; Jeux</li>
                                    <li><i class="fa-solid fa-music"></i>&nbsp; Musique</li>
                                    <li><i class="fa-solid fa-person-walking"></i>&nbsp; Promenades</li>
                                </ul>
                                <h4>Mes Valeurs</h4>
                                <ul>
                                    <li>Honnêteté</li>
                                    <li>Partage</li>
                                    <li>Créativité</li>
                                </ul>
                                <h4>Un projet ?</h4>
                                <p className='flipCardSmall'>Pour échanger sur vos missions et mes compétences</p>
                            </div>
                            <Link class="shadow-text" to='/contact'>CONTACTEZ-MOI</Link>
                        </div>
                    </div>
           </aside>
    </>)
}

export default Card
import './Bio.scss';
import { Link } from 'react-router-dom';
import cv from '../../doc/CV_BONIS_Audrey.pdf'

const Bio = () => {
    return (
        <div className='bio'>
            <div className='bio__links'>
                <a href={cv} download>
                    <i className="fa-solid fa-file-arrow-down"></i>
                </a>
                <Link to="https://github.com/B-Audrey" target='_blank'>
                    <i className="fa-brands fa-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/audrey-bonis/" target='_blank' >
                    <i className="fa-brands fa-linkedin"></i>
                </Link>
                
            </div>
            <div className='bio__text'>
                <p >Ayant toujours eu un attrait pour l'informatique, j'ai décidé en septmbre 2022 de me reconvertir pour devenir développeuse Web. Après quelques mois en autonomie, j'ai intégré un parcours certifiant avec Openclassrooms. Je valide donc un diplôme de concepteur / intéragteur web en 2023.</p>
                <p>Dès lors, je développe des compétences ciblées sur le langage Javascript avec React pour la partie Front et NodeJS pour le côté back.</p>
                <p>Mes forces sont : ma capacité d'adaptation, ma persévérence et mon organisation. J'ai la volonté d'apprendre, je suis curieuse de comprendre, je connais l'importance de la satisfaction client.</p>
                <p className='bio__info'><i className="fa-solid fa-circle-arrow-left"></i>&nbsp; Vous pouvez retrouver des informations suplpémentaires sur ma carte de visite</p>
            </div>
        </div>
    )
}

export default Bio
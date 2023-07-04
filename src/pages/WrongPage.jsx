import { Link } from 'react-router-dom';
import '../styles/WrongPage.scss';

const WrongPage = () => {
        return (
            <>
            <div className='error'>
            <h1 className='error__code'><i className="fa-solid fa-circle-xmark"></i>&nbsp;404&nbsp;<i className="fa-solid fa-circle-xmark"></i></h1>
            <p className='error__text'>Oups! mauvaise route 😱</p>
            <Link className='error__link' to="portefolio/">Retourner sur la page d'accueil</Link>
            </div>
            </>
          )
}

export default WrongPage
import './Header.scss';
import Title from "./Title/Title";
import Autotext from "./Autotext/Autotext";
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <Title className='header__title' text='Développeuse Java Script' name='Audrey.B'/>
            <Autotext className="header__text" />
        </div>
    )
}

export default Header
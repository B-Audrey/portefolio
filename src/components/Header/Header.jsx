import './Header.scss';
import Title from "./Title/Title";
import Autotext from "./Autotext/Autotext";

const Header = () => {
    return(
        <div className="header">
            <Title className='header__title' text='Développeuse web'/>
            <Autotext className="header__text" />
        </div>
    )
}

export default Header
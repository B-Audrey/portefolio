import './Header.scss';
import Title from "./Title/Title";
import Nav from './Nav/Nav';

const Header = () => {
    return(
        <div className="header">
            <Title className='header__title' text='Développeuse web'/>
            <Nav />
        </div>
    )
}

export default Header
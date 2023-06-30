import './Button.scss';
import { Link as HashLink } from "react-scroll";
import { Link } from 'react-router-dom';

const Button = ({text, link, hashLink}) => {
    const hasHashLink = link ? false : true;

    return hasHashLink ? (
        <button className='button'>
            <HashLink to={hashLink} smooth={true} duration={1000}>{text}</HashLink>
        </button>
    ) : (
        <button className='button'>
            <Link to={link}>{text}</Link>
        </button>
    )
}

export default Button
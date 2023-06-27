import './Button.scss';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const Button = ({text, link, hashLink}) => {
    const hasHashLink = link ? false : true;

    return hasHashLink ? (
        <button className='button'>
            <HashLink to={hashLink}>{text}</HashLink>
        </button>
    ) : (
        <button className='button'>
            <Link to={link}>{text}</Link>
        </button>
    )
}

export default Button
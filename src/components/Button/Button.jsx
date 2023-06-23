import './Button.scss';
import { Link } from 'react-router-dom';

const Button = ({text, link}) => {
    return link ? (
        <button className='button'>
            <Link to={link}>{text}</Link>
        </button>
    ) : (
        <button className='button'>
            {text}
        </button>
    )
}

export default Button
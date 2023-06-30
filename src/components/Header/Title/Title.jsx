import './Title.scss';
import { HashLink } from 'react-router-hash-link';


const Title = ({text}) => {
    return(
        <HashLink to='/portefolio/#home' className='title' id='header'>
            <h1>{text}</h1>
        </HashLink>    
    )
}

export default Title
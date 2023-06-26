import './Title.scss';
import { Link } from 'react-router-dom';

const Title = ({text}) => {
    return(
        <div className='title'>
            <h1 className='title__work'>{text}</h1>
            <Link to="https://www.linkedin.com/in/audrey-bonis/" className='title__name'>
                Audrey.B
            </Link>
            
        </div>        
    )
}

export default Title
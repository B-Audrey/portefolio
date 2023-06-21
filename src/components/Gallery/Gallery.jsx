import './Gallery.scss';
import { Link } from 'react-router-dom';

const Gallery = ({data}) => {
    return (
        <div className='Gallery'>
            {data.map((current, index) => (
                <div key={`${index}-${current.id}`} className='Gallery__item'>
                    <Link to={current.link} className='Gallery__link'>
                    <img src={current.cover} alt='cover' className='Gallery__img'></img>
                    <div className='Gallery__title'>
                        <p className='Gallery__text'>{current.title}</p>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Gallery;
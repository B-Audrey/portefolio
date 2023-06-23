import './Title.scss';

const Title = ({text, name}) => {
    return(
        <div className='title'>
            <h1 className='title__work'>{text}</h1>
            <h2 className='title__name'>{name}</h2>
        </div>        
    )
}

export default Title
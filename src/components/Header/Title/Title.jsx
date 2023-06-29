import './Title.scss';


const Title = ({text}) => {
    return(
        <div className='title'>
            <h1 className='title__work'>{text}</h1>
        </div>        
    )
}

export default Title
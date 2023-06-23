import './ImageBloc.scss'

const ImageBloc = ({img}) => {
    return(
        <div className='banner'>
            <img src={img} alt="Banner" className='banner__image'/>
        </div>
    )
}

export default ImageBloc
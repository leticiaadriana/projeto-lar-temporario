import imgBanner from '../../assets/adocao.png'
import './style.css'

function Banner () {
    return (
        <div className='banner'>
                <img src={imgBanner} alt="Banner2"/>
                <div className='divideBar'></div>
        </div>
    );
}

export default Banner;
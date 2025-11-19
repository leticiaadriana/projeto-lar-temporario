import imgBanner from '../../assets/banner.png'
import './style.css'

function Banner () {
    return (
        <div className='banner'>
                <img src={imgBanner} alt="Banner"/>
        </div>
    );
}

export default Banner;
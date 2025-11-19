import imgONG1 from '../../assets/ong_1.png'
import imgONG2 from '../../assets/ong_2.png'
import imgONG3 from '../../assets/ong_3.png'
import imgONG4 from '../../assets/ong_4.png'
import './style.css'

function Ongs() {
    return(
        <div className='contribua_info'>
            <h2>Outras ONG's</h2>
            <p>Aqui estão algumas ONG’s parceiras, contribua para espalhar o bem!</p>

            <center>
            <div className='ongs_container'>
                    <div className='left_ongs'>
                        <a href='https://www.instagram.com/proanimalsaocarlos/'>
                            <img src={imgONG1}></img>
                        </a>
                        <a href='https://www.instagram.com/pegadasnocoracao_sc/'>
                            <img src={imgONG2}></img>
                        </a>
                    </div>
                    <div className='right_ongs'>
                        <a href='https://www.instagram.com/arca_de_sao_francisco/'>
                            <img src={imgONG3}></img>
                        </a>
                        <a href='https://www.instagram.com/luzdosbichos/'>
                            <img src={imgONG4}></img>
                        </a>
                    </div>
            </div>
            </center>
        </div>
    );
} 

export default Ongs;
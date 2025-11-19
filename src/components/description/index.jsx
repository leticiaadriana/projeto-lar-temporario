import './style.css'

function Description () {
    return(
        <div className='description'>
            <h2>Como funciona?</h2>
            <div className='content-container'>
                <div className='content'>
                    <h4>Formulário de interesse</h4>
                    <p>
                        Depois de observar os bichinhos disponíveis para adoção, 
                        preencha o nosso formulário de interesse com informações verídicas!
                    </p>
                </div>
                <div className='content'>
                    <h4>Comprovação dos dados</h4>
                    <p>
                        Caso você atenda aos critérios iniciais de adoção responsável, 
                        em até 48h, entraremos em contato para solicitar a comprovação das informações fornecidas.
                    </p>
                </div>
                <div className='content'>
                    <h4>Visita ao Projeto</h4>
                    <p>
                        Após todos os passos serem concluídos, 
                        agendaremos uma visita para buscar o gatinho adotado ou conhecer outros.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Description;
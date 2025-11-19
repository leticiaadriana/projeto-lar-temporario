import './style.css'

function AdoptionForm() {
  return (
    <div className="adoption-form-container">
      <div className="adoption-form">
        <div className="adoption-form-title">
          <h2>Formulário de Interesse</h2>
        </div>

        <form>
          <label htmlFor="name">Nome completo: </label>
          <input type="text" id="name" />

          <label htmlFor="telefone">Telefone (DDD + Número):</label>
          <input type="tel" id="telefone" />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" />

          <label htmlFor="address">Endereço completo:</label>
          <input type="text" id="address" />

          <label htmlFor="do-have-cats">Você já teve gato(s)?</label>
          <input type="text" id="do-have-cats" />

          <label htmlFor="have-cats">
            Se tem gatos ou outros animais, descreva quantos são, quais sexos e idades.
          </label>
          <input type="text" id="have-cats" />

          <label htmlFor="vacina">Se tem gatos, eles são vacinados?</label>
          <input type="text" id="vacina" />

          <label htmlFor="castrados">Se tem gatos, eles são castrados?</label>
          <input type="text" id="castrados" />

          <label htmlFor="cidade">Você mora em:</label>
          <input type="text" id="cidade" />

          <label htmlFor="apartamento">
            Se mora em apartamento, há redes de proteção em todas as janelas?
          </label>
          <input type="text" id="apartamento" />

          <label htmlFor="casa">
            Se mora em casa, possui estrutura para evitar fugas?
          </label>
          <input type="text" id="casa" />

          <label htmlFor="experiencia">
            Você tem experiência com a adaptação de felinos?
          </label>
          <input type="text" id="experiencia" />

          <label htmlFor="ciencia">
            Você tem ciência da responsabilidade que envolve a adoção?
          </label>
          <input type="text" id="ciencia" />

          <label htmlFor="gatinhos-interesse">
            Qual é ou quais são os nomes dos gatinhos que você gostaria de adotar?
          </label>
          <input type="text" id="gatinhos-interesse" />

          <button className="submit-form" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdoptionForm;
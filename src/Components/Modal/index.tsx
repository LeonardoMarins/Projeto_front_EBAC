import { ModalContainer } from './styles'

export type Props = {
  isVisible: boolean
  children: JSX.Element
  nome?: string
  descricao?: string
  imagem?: string
  preco?: number
  porcao?: string
}

const Modal = ({
  isVisible,
  children,
  nome,
  descricao,
  imagem,
  preco,
  porcao
}: Props) => {
  return (
    <ModalContainer>
      {isVisible && (
        <>
          <div
            className="overlay"
            style={{ display: isVisible ? 'block' : 'none' }}
          >
            <div className="container">
              <h2>{nome}</h2>
              <div>{children}</div>
              <img className="image-logo" src={imagem} alt="" />
              <p className="description">{descricao}</p>
              <button type="button" className="preco">
                Adicionar ao carrinho - R${preco}
              </button>
              <p className="porcao">serve - {porcao}</p>
            </div>
          </div>
        </>
      )}
    </ModalContainer>
  )
}

export default Modal

import { ModalContainer } from './styles'
import image from '../../img/pizza.png'

export type Props = {
  isVisible: boolean
  children: JSX.Element
  nome?: string
  descricao?: string
  imagem?: string
}

const Modal = ({ isVisible, children, nome, descricao, imagem }: Props) => {
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
              <p>{descricao}</p>
            </div>
          </div>
        </>
      )}
    </ModalContainer>
  )
}

export default Modal

import { useDispatch } from 'react-redux'
import { ModalContainer } from './styles'
import { add, open } from '../../store/reducers/cart'
import { CardapioItem, Comidas } from '../../pages/Home'
import { useEffect, useState } from 'react'

export type Props = {
  isVisible: boolean
  children: JSX.Element
  nome: string
  descricao: string
  imagem: string
  preco: number
  porcao: string
  foto: string
  id: number
}

const Modal = ({
  isVisible,
  children,
  nome,
  descricao,
  imagem,
  preco,
  porcao,
  foto,
  id
}: Props) => {
  const dispatch = useDispatch()

  const openCart = () => {
    const itemDoCardapio: CardapioItem = {
      nome,
      descricao,
      foto,
      id,
      preco,
      porcao
    }

    dispatch(add(itemDoCardapio))
    dispatch(open())
  }

  return (
    <ModalContainer>
      {isVisible && (
        <>
          <div className="overlay">
            <div className="container">
              <h2>{nome}</h2>
              <div>{children}</div>
              <img className="image-logo" src={imagem} alt="" />
              <p className="description">{descricao}</p>
              <button type="button" className="preco" onClick={openCart}>
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

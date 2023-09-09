import { Aside, Container, ContainerCart, Overlay } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import { Links } from '../Card/styles'
import { useEffect, useState } from 'react'
import trash from '../../img/trash.png'

const Cart = () => {
  const { isOpen, cardapio } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [valor, setValor] = useState(0)

  const closeCart = () => {
    dispatch(close())
  }

  useEffect(() => {
    const total = cardapio.reduce((acc, item) => acc + item.preco, 0)
    setValor(total)
  }, [cardapio])

  return (
    <>
      <Container className={isOpen ? 'is-visible' : ''}>
        <Overlay onClick={closeCart} />
        <Aside>
          {cardapio.map((item) => (
            <ContainerCart key={item.id}>
              <img src={item.foto} alt="" />
              <h2>{item.nome}</h2>
              <p>R${item.preco}</p>
              <img
                className="logo_item"
                onClick={() => dispatch(remove(item.id))}
                src={trash}
                alt=""
              />
            </ContainerCart>
          ))}
          <p style={{ color: '#ffebd9', marginLeft: 20 }}>
            Valor Total : <span style={{ marginLeft: 180 }}>R${valor}</span>
          </p>
          <Button fullWidth>
            <Links style={{ color: '#e66767' }} to={'/'}>
              Continuar com a entrega
            </Links>
          </Button>
        </Aside>
      </Container>
    </>
  )
}

export default Cart

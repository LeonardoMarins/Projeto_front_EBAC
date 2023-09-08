import { Aside, Container, ContainerCart, Overlay } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, adicionar } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <>
      <Container className={isOpen ? 'is-visible' : ''}>
        <Overlay onClick={closeCart} />
        <Aside>
          {adicionar.map((item) => (
            <ContainerCart key={item.id}>
              <img src={item.foto} alt="" />
              <h2>{item.nome}</h2>
              <p>{item.preco}</p>
            </ContainerCart>
          ))}
        </Aside>
      </Container>
    </>
  )
}

export default Cart

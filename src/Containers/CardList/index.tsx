import Card from '../../Components/Card'
import { Container } from './styles'
import { Comidas } from '../../pages/Home'

type Props = {
  comida: Comidas[]
}

const CardList = ({ comida }: Props) => {
  return (
    <>
      <Container className="container">
        {comida.map((dado) => (
          <Card
            key={dado.id}
            id={dado.id}
            imagem={dado.capa}
            titulo={dado.titulo}
            capa={dado.capa}
            tipo={dado.tipo}
            avaliacao={dado.avaliacao}
          />
        ))}
      </Container>
    </>
  )
}

export default CardList

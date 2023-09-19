import Card from '../../Components/Card'
import { Container } from './styles'
import { Comidas } from '../../pages/Home'

type Props = {
  comida: Comidas[]
}

const CardList = ({ comida }: Props) => {
  return (
    <>
      <Container>
        {comida.map((dado) => (
          <Card
            preco={1}
            porcao="1"
            color="red"
            width="big"
            height="big"
            colorButton="#FFEBD9"
            background="#FFF"
            key={dado.id}
            id={dado.id}
            imagem={dado.capa}
            titulo={dado.titulo}
            capa={dado.capa}
            tipo={dado.descricao}
            avaliacao={dado.avaliacao}
          />
        ))}
      </Container>
    </>
  )
}

export default CardList

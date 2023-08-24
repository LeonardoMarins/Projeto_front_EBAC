import Card from '../../Components/Card'
import { Container } from './styles'
import sushi from '../../img/CardSushi.png'

const Section = () => {
  return (
    <>
      <Container>
        <Card
          star="4.9"
          color="red"
          imagem={sushi}
          subtitle="teste1"
          title="teste2"
        />
        <Card
          star="4.6"
          color="red"
          imagem={sushi}
          subtitle="teste1"
          title="teste2"
        />
        <Card
          star="4.5"
          color="red"
          imagem={sushi}
          subtitle="teste1"
          title="teste2"
        />
        <Card
          star="3.9"
          color="red"
          imagem={sushi}
          subtitle="teste1"
          title="teste2"
        />
      </Container>
    </>
  )
}

export default Section

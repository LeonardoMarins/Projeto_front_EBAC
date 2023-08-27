import { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import CardList from '../../Containers/CardList'
import { GlobalStyle } from '../../styles'
import { Container } from './styles'

export type Comidas = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [comida, setComida] = useState<Comidas[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setComida(res))
  }, [])

  return (
    <>
      <Container className="container">
        <GlobalStyle />
        <Header text="Viva experiências gastronômicas no conforto da sua casa" />
        <CardList comida={comida} />
        <Footer text="A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. " />
      </Container>
    </>
  )
}

export default Home

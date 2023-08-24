import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Section from '../../Containers/Section'
import { GlobalStyle } from '../../styles'

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Header text="Viva experiências gastronômicas no conforto da sua casa" />
      <Section />
      <Footer text="A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. " />
    </>
  )
}

export default Home

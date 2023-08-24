import Card from '../../Components/Card'
import Footer from '../../Components/Footer'
import HeaderProfile from '../../Components/HeaderProfile'
import { GlobalStyle } from '../../styles'
import pizza from '../../img/pizza.png'
import { CardContainerI } from './styles'

const Profile = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderProfile />
      <CardContainerI>
        <Card
          colorButton="#E66767"
          background="#E66767"
          color="#FFEBD9"
          imagem={pizza}
          subtitle="teste1"
          title="teste2"
        />
        <Card
          colorButton="#E66767"
          background="#E66767"
          color="#FFEBD9"
          imagem={pizza}
          subtitle="teste1"
          title="teste2"
        />
        <Card
          colorButton="#E66767"
          background="#E66767"
          color="#FFEBD9"
          imagem={pizza}
          subtitle="teste1"
          title="teste2"
        />
        <Card
          colorButton="#E66767"
          background="#E66767"
          color="#FFEBD9"
          imagem={pizza}
          subtitle="teste1"
          title="teste2"
        />
        <Card
          colorButton="#E66767"
          background="#E66767"
          color="#FFEBD9"
          imagem={pizza}
          subtitle="teste1"
          title="teste2"
        />
        <Card
          colorButton="#E66767"
          background="#E66767"
          color="#FFEBD9"
          imagem={pizza}
          subtitle="teste1"
          title="teste2"
        />
      </CardContainerI>
      <Footer
        text={
          'A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. '
        }
      />
    </>
  )
}

export default Profile

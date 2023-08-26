import {
  Banner,
  ContainerProfile,
  ContainerBanner,
  BannerOverlay,
  TextContainer,
  Subtitle
} from './styles'
import logo from '../../img/logo.png'
import fundo from '../../img/image 2.png'

const HeaderProfile = () => {
  return (
    <>
      <ContainerProfile className="container">
        <p className="paragrafo">Restaurante</p>
        <img src={logo} alt="logo" />
        <p>0 - Produto(s) no carrinho</p>
      </ContainerProfile>
      <ContainerBanner className="container">
        <Banner src={fundo} alt="imagem italiana" />
        <BannerOverlay />
        <TextContainer>
          <h2>Italiana</h2>
          <Subtitle>La Dolce Vita Trattoria</Subtitle>
        </TextContainer>
      </ContainerBanner>
    </>
  )
}

export default HeaderProfile

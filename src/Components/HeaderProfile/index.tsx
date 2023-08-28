import {
  Banner,
  ContainerProfile,
  ContainerBanner,
  BannerOverlay,
  TextContainer,
  Subtitle,
  ImagemLogo
} from './styles'
import logo from '../../img/logo.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Comidas } from '../../pages/Home'

const HeaderProfile = () => {
  const { id } = useParams()
  const [restaurantData, setRestaurantData] = useState<Comidas>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurantData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [id])

  if (!restaurantData) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <ContainerProfile className="container">
        <p className="paragrafo">Restaurante</p>
        <ImagemLogo to={'/'}>
          <img src={logo} alt="logo" />
        </ImagemLogo>
        <p>0 - Produto(s) no carrinho</p>
      </ContainerProfile>
      <ContainerBanner className="container">
        <Banner src={restaurantData.capa} alt="imagem italiana" />
        <BannerOverlay />
        <TextContainer>
          <h2>{restaurantData.titulo}</h2>
          <Subtitle>{restaurantData.descricao}</Subtitle>
        </TextContainer>
      </ContainerBanner>
    </>
  )
}

export default HeaderProfile

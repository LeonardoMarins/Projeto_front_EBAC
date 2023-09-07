import { useEffect, useState } from 'react'
import HeaderProfile from '../../Components/HeaderProfile'
import Footer from '../../Components/Footer'
import CardProfile from '../../Containers/CardProfile'
import { GlobalStyle } from '../../styles'
import { Comidas } from '../Home'
import { CardContainerI } from './styles'
import Cart from '../../Components/Cart'

const Profile = () => {
  const [restaurantData, setRestaurantData] = useState<Comidas>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setRestaurantData(res))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  if (!restaurantData) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <GlobalStyle />
      <HeaderProfile />
      <Cart />
      <CardContainerI>
        <CardProfile restaurant={restaurantData} />
      </CardContainerI>
      <Footer
        text={
          'A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.'
        }
      />
    </>
  )
}

export default Profile

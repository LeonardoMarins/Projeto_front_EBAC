import { useState, useEffect } from 'react'
import Card from '../../Components/Card'
import { Container } from './styles'
import { Comidas } from '../../pages/Home'
import { useParams } from 'react-router-dom'

type Props = {
  restaurant: Comidas
}

const CardProfile = ({ restaurant }: Props) => {
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
    <Container className="container">
      {restaurantData.cardapio?.map((item) => (
        <Card
          color="#FFEBD9"
          width="small"
          colorButton="#E66767"
          background="#E66767"
          key={item.id}
          id={item.id}
          imagem={item.foto}
          titulo={item.nome}
          capa={item.foto}
          tipo={item.descricao}
          preco={item.preco}
          porcao={item.porcao}
        />
      ))}
    </Container>
  )
}

export default CardProfile

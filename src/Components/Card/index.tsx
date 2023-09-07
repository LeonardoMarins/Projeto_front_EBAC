import { useEffect, useState } from 'react'
import Button from '../Button'
import { CardContainer, ContainerText, Links } from './styles'
import Modal from '../Modal' // Importe o componente Modal
import close from '../../img/close.png'
import { Comidas } from '../../pages/Home'

export type Props = {
  id: number
  capa: string
  titulo: string
  background?: string
  color?: string
  colorButton?: string
  width?: 'big' | 'small'
  avaliacao?: number
  tipo: string
  imagem: string
  preco: number
  porcao: string
  backgroundButton?: string
  height?: 'big' | 'small'
}

const Card = ({
  background,
  color,
  colorButton,
  id,
  capa,
  tipo,
  titulo,
  avaliacao,
  imagem,
  preco,
  porcao,
  backgroundButton
}: Props) => {
  const estilos = {
    background: background,
    color: color,
    colorButton: colorButton,
    backgroundButton: backgroundButton
  }

  const width = color === '#FFEBD9' ? '320px' : '472px'
  const height = color === '#FFEBD9' ? '348px' : '382px'
  const buttonText = color === '#FFEBD9' ? 'Mais Detalhes' : 'Saiba Mais'
  const imageWidth = color === '#FFEBD9' ? '320px' : '472px'
  const imageHeight = color === '#FFEBD9' ? '167px' : '200px'

  const [verifica, setVerifica] = useState(false)
  const [comida, setComida] = useState<Comidas>()
  const [ids, setId] = useState(0)
  const button = color === '#FFEBD9' ? '' : `/profile/${id}`

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((data) => setComida(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const openModal = () => {
    setVerifica(true)
    setId(id)
  }

  const closeModel = () => {
    setVerifica(false)
  }

  if (!comida) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <CardContainer
        className="container"
        style={{ background: estilos.background, width: width, height: height }}
      >
        <img
          src={capa}
          alt=""
          style={{ width: imageWidth, height: imageHeight }}
        />
        <ContainerText>
          <h3 style={{ color: estilos.color }}>{titulo}</h3>
          <p style={{ color: estilos.color }}>
            {avaliacao && <span> {avaliacao}&#11088;</span>}
          </p>
        </ContainerText>
        <p style={{ color: estilos.color }} className="paragrafo">
          {tipo}
        </p>
        <Button color={color} fullWidth={color === '#FFEBD9'}>
          <Links
            style={{
              color: estilos.colorButton
            }}
            to={button}
            onClick={openModal}
          >
            {buttonText}
          </Links>
        </Button>
        {verifica && (
          <>
            {ids && (
              <Modal
                id={ids}
                foto={capa}
                isVisible={verifica}
                nome={titulo}
                descricao={tipo}
                imagem={imagem}
                preco={preco}
                porcao={porcao}
              >
                <img
                  style={{ width: 24, height: 24 }}
                  src={close}
                  alt="fechar"
                  onClick={closeModel}
                />
              </Modal>
            )}
          </>
        )}
      </CardContainer>
    </>
  )
}
export default Card

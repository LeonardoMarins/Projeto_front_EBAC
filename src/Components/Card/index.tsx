import Button from '../Button'
import { CardContainer, ContainerText, Links } from './styles'

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
}

const Card = ({
  background,
  color,
  colorButton,
  id,
  capa,
  tipo,
  titulo,
  avaliacao
}: Props) => {
  const estilos = {
    background: background,
    color: color,
    colorButton: colorButton
  }

  const width = color === '#FFEBD9' ? '320px' : '472px'
  const buttonText = color === '#FFEBD9' ? 'Adicionar carrinho' : 'Saiba Mais'

  return (
    <>
      <CardContainer
        className="container"
        style={{ background: estilos.background, width: width }}
      >
        <img src={capa} alt="" />
        <ContainerText>
          <h3 style={{ color: estilos.color }}>{titulo}</h3>
          <p>{avaliacao && <span> {avaliacao}&#11088;</span>}</p>
        </ContainerText>
        <p style={{ color: estilos.color }} className="paragrafo">
          {tipo}
        </p>
        <Button color={color} fullWidth={color === '#FFEBD9'}>
          <Links style={{ color: estilos.colorButton }} to={`/profile/${id}`}>
            {buttonText}
          </Links>
        </Button>
      </CardContainer>
    </>
  )
}

export default Card

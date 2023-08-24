import Button from '../Button'
import { CardContainer, ContainerText, Links } from './styles'

export type Props = {
  title: string
  subtitle: string
  imagem: string
  background?: string
  color?: string
  colorButton?: string
  width?: 'big' | 'small'
  star?: string
}

const Card = ({
  title,
  subtitle,
  imagem,
  background,
  color,
  colorButton,
  star
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
      <CardContainer style={{ background: estilos.background, width: width }}>
        <img src={imagem} alt="imagem sushi" />
        <ContainerText>
          <h3 style={{ color: estilos.color }}>{title}</h3>
          <p>{star && <span>{star}&#11088;</span>}</p>
        </ContainerText>
        <p style={{ color: estilos.color }} className="paragrafo">
          {subtitle}
        </p>
        <Button color={color} fullWidth={color === '#FFEBD9'}>
          <Links style={{ color: estilos.colorButton }} to={'/profile'}>
            {buttonText}
          </Links>
        </Button>
      </CardContainer>
    </>
  )
}

export default Card

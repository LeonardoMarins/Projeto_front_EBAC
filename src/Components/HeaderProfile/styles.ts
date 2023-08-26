import { styled } from 'styled-components'
import { Container } from '../Header/styles'
import fundo from '../../img/image 2.png'

export const ContainerProfile = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  width: 100%;
  height: 160px;
  padding: 0 40px;

  p {
    color: #e66767;
    font-size: 18px;
    font-weight: bold;
    margin-right: 50px;

    @media (max-width: 820px) {
      margin-right: 0px;
    }
  }

  img {
    padding: 0px;
    margin-left: 4.5em;

    @media (max-width: 820px) {
      display: none;
    }
  }
`

export const Banner = styled.img`
  max-width: 100%; /* Adicione esta linha para limitar a largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
`

export const ContainerBanner = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

export const TextContainer = styled.div`
  position: absolute;
  top: 10%; /* Ajuste verticalmente conforme necessário */
  left: 5%; /* Ajuste horizontalmente conforme necessário */
  color: #ffffff;
  font-size: 2vw; /* Usando vw para o tamanho da fonte */
  font-weight: 100;
  line-height: normal;
`

export const Subtitle = styled.p`
  font-size: 2vw; /* Usando vw para o tamanho da fonte */
  font-weight: 900;
  position: absolute;
  top: 400%; /* Ajuste verticalmente conforme necessário */
  left: 5%; /* Ajuste horizontalmente conforme necessário */
  color: #ffffff;
  white-space: nowrap;
`

import { styled } from 'styled-components'
import { Container } from '../Header/styles'
import fundo from '../../img/image 2.png'
import { Link } from 'react-router-dom'

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
export const ImagemLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding: 0;
    margin-left: 68px; /* Ajuste o valor conforme necessário */
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

  img {
    width: 100vw;
    height: 280px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
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
  top: 4%; /* Ajuste verticalmente conforme necessário */
  left: 5%; /* Ajuste horizontalmente conforme necessário */
  color: #ffffff;
  font-size: 2vw; /* Usando vw para o tamanho da fonte */
  width: 90vw;
  font-weight: 100;
  line-height: normal;

  h2 {
    color: #ccc; /* Define a cor cinza */
    position: absolute;
    top: 10%; /* Ajuste verticalmente conforme necessário */
    left: 6%; /* Ajuste horizontalmente conforme necessário */
    font-size: 32px; /* Usando vw para o tamanho da fonte */
    font-weight: 100;
    line-height: normal;
    z-index: 1; /* Garante que o texto esteja atrás da sobreposição */
  }
`

export const Subtitle = styled.p`
  position: absolute;
  top: 80px;
  left: 70px;
  color: #fff;
  font-family: Roboto;
  font-size: 1.2em;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`

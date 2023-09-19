import { styled } from 'styled-components'
import fundo from '../../img/FundoHeader.png'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-image: url(${fundo});
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 335px;
  position: relative;
`

export const ImagemLogo = styled(Link)`
  padding-bottom: 100px;
  position: absolute;
  padding-right: 20px;
`

export const Text = styled.p`
  color: #e66767;
  text-align: center;
  padding-top: 80px;
  font-family: Roboto;
  font-size: 30.829px;
  font-style: normal;
  height: 86px;
  font-weight: 900;
  line-height: normal;
`

export const Image = styled.img`
  margin-right: 20px;
`

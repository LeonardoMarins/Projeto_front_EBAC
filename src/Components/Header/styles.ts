import { styled } from 'styled-components'
import fundo from '../../img/FundoHeader.png'

export const Container = styled.div`
  background-image: url(${fundo});
  display: flex;
  justify-content: center;
  align-items: center;
  height: 335px;
  position: relative;
`

export const ImagemLogo = styled.img`
  padding-bottom: 200px;
  position: absolute;
  padding-right: 20px;
`

export const Text = styled.p`
  color: #e66767;
  text-align: center;
  padding-top: 80px;
  font-family: Roboto;
  font-size: 36.829px;
  font-style: normal;
  width: 552px;
  height: 86px;
  font-weight: 900;
  line-height: normal;
`

export const Image = styled.img`
  margin-right: 20px;
`

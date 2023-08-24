import logo from '../../img/logo.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'
import instagram from '../../img/instagram.png'
import {
  ContainerF,
  FooterIconF,
  FooterIconI,
  FooterIconT,
  Paragrafo
} from './styles'
import { ImagemLogo } from '../Header/styles'

type FooterProps = {
  text: string
}

const Footer = ({ text }: FooterProps) => {
  return (
    <ContainerF>
      <ImagemLogo src={logo} alt="logo" />
      <Paragrafo>{text}</Paragrafo>
      <div>
        <ul>
          <li>
            <a href={'#'} target="_blank" rel="noopener noreferrer">
              <FooterIconF src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href={'#'} target="_blank" rel="noopener noreferrer">
              <FooterIconI src={instagram} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href={'#'} target="_blank" rel="noopener noreferrer">
              <FooterIconT src={twitter} alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </ContainerF>
  )
}

export default Footer

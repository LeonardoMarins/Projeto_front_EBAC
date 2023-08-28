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
      <ImagemLogo to={'/'}>
        <img src={logo} alt="logo" />
      </ImagemLogo>
      <Paragrafo>{text}</Paragrafo>
      <div className="conatiner">
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

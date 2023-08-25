import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Props } from '.'

export const CardContainer = styled.div<
  Omit<Props, 'title' | 'subtitle' | 'imagem'>
>`
  width: ${(props) => (props.width === 'big' ? 472 + 'px' : 320 + 'px')};
  border: 1px solid #e66767;
  .paragrafo {
    margin: 24px 8px;
  }
`

export const ContainerText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h3 {
    margin-left: 0.4em;
    color: #e66767;
  }
`

export const Links = styled(Link)`
  text-decoration: none;
  color: #fff;
`

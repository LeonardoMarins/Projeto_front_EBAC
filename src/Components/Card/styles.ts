import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Props } from '.'

export const CardContainer = styled.div<
  Omit<Props, 'imagem' | 'id' | 'tipo' | 'titulo' | 'capa' | 'tipo' | 'comida'>
>`
  width: ${(props) => (props.width === 'big' ? 472 + 'px' : 320 + 'px')};
  border: 1px solid #e66767;
  height: ${(props) => (props.height === 'big' ? 382 + 'px' : 348 + 'px')};
  .paragrafo {
    margin-left: 0.6em;
    margin-top: 0.6em;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 80px;
  }

  h3 {
    margin-left: 0.6em;
    margin-top: 0.6em;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 40px;
  }

  img {
    width: ${(props) => (props.width === 'big' ? '472px' : '320px')};
    height: ${(props) => (props.width === 'big' ? '200px' : '167px')};
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

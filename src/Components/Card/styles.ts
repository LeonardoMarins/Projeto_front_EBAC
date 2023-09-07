import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Props } from '.'

export const CardContainer = styled.div<
  Omit<
    Props,
    | 'imagem'
    | 'id'
    | 'tipo'
    | 'titulo'
    | 'capa'
    | 'tipo'
    | 'comidas'
    | 'porcao'
    | 'preco'
    | 'cardapio'
  >
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`

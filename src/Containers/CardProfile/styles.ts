import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 1224px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 48px;
  margin-top: 42px;
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */

  @media (max-width: 1244px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 989px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1500px) {
    margin-left: 24%;
  }

  img {
    max-width: 100%;
  }
`

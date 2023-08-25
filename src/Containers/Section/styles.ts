import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin: 0 auto;
  margin-top: 2%;
  justify-items: center; /* Centraliza os itens horizontalmente */
  align-items: center;

  @media (max-width: 1220px) {
    grid-template-columns: 1fr;
  }

  img {
    max-width: 100%;
  }
`

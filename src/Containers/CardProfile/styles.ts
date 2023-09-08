import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1024px;
  width: 708px;
  grid-gap: 32px;
  margin: 0 auto;
  justify-items: center; /* Centraliza os itens horizontalmente */
  align-items: center;

  @media (max-width: 1220px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 798px) {
    grid-template-columns: 1fr;
  }
  .containerProfile {
    max-width: 320px;
  }

  img {
    max-width: 100%;
    width: 320px;
  }
`

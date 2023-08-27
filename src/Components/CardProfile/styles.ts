import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  margin: 0 auto;
  margin-top: 2%;
  justify-items: center; /* Centraliza os itens horizontalmente */
  align-items: center;

  @media (max-width: 1220px) {
    grid-template-columns: 1fr 1fr;
  }
  .containerProfile {
    max-width: 320px;
  }

  img {
    max-width: 100%;
    width: 320px;
  }
`

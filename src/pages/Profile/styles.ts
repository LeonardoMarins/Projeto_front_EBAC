import { styled } from 'styled-components'

export const CardContainerI = styled.div`
  margin-left: 10%;
  margin-top: 56px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  img {
    width: 320px;
  }

  @media (max-width: 1260px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 818px) {
    grid-template-columns: 1fr;
    margin-right: 2.4em;
  }
`

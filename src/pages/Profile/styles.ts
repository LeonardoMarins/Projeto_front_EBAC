import { styled } from 'styled-components'
import { CardContainer } from '../../Components/Card/styles'

export const CardContainerI = styled(CardContainer)`
  margin-left: 10%;
  margin-top: 56px;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  img {
    width: 320px;
    border-radius: 10px;
  }

  @media (max-width: 1260px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 818px) {
    grid-template-columns: 1fr;
    margin-left: 4.5em;
  }
`

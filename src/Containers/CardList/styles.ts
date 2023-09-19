import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
  margin-bottom: 48px;
  margin-top: 42px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-left: 220px;
    padding-right: 220px;
  }

  img {
    max-width: 100%;
  }
`

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
  padding-right: 280px;
  padding-left: 280px;
  transition: width 0.3s ease;

  @media (max-width: 1220px) {
    grid-template-columns: 1fr;
    justify-content: 0;
    align-items: 0;
    padding-left: 220px;
    padding-right: 220px;
  }

  img {
    max-width: 100%;
  }
`

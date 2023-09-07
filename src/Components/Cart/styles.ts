import { styled } from 'styled-components'

export const ContainerCart = styled.div`
  background: #ffebd9;
  display: flex;
  width: 344px;
  height: 100px;
  position: relative;
  color: #e66767;
  margin-top: 40px;
  margin-left: 16px;
  margin-bottom: 24px;

  p {
    position: absolute;
    top: 48px;
    left: 100px;
  }

  img {
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 12px;
  }
`

export const Aside = styled.aside`
  background: #e66767;
  height: 100vh; /* Define a altura como 100% da viewport */
  width: 360px;
  position: fixed; /* Torna o elemento fixo na página */
  top: 0;
  right: 0;
  z-index: 1;

  img {
    height: 80px;
    width: 80px;
  }
`

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
`

export const Container = styled.div`
  display: none;

  &.is-visible {
    display: block;
  }
`

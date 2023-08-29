import { styled } from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 400px;
  height: 400px;

  img {
    width: 36px;
    height: 36px;
  }

  .container {
    display: flex;
    position: fixed;
    justify-content: space-between;
    top: 100px;

    width: 80%;
    margin-left: 8em;
    max-height: 100vh;
    height: 344px;
    object-fit: cover;
    z-index: 1;
    background-color: #e66767;

    .image-logo {
      position: absolute;
      margin: 32px;
      width: 280px;
      height: 280px;
      border-radius: 0px;
    }

    p {
      position: absolute;
      left: 340px;
      top: 40%;
    }

    h2 {
      margin-left: 14em;
      margin-top: 1.2em;
    }
  }

  .overlay {
    position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .sticky-image {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    max-height: 100vh;
    object-fit: cover;
    z-index: 1;
  }
`

import { styled } from 'styled-components'
import { Props } from '.'

export const StyledButton = styled.button<Props>`
  color: ${(props) => (props.color === 'red' ? '#fff' : '#e66767')};
  background-color: ${(props) =>
    props.color === 'red' ? '#e66767' : '#FFEBD9'};
  border: none;
  padding: 8px;
  margin: 5px;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? '97%' : '')};
`

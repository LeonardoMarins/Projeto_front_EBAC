import { StyledButton } from './styles'

export type Props = {
  children: JSX.Element
  color?: string
  fullWidth?: boolean
}

const Button = ({ children, color, fullWidth }: Props) => {
  return (
    <>
      <StyledButton color={color} fullWidth={fullWidth}>
        {children}
      </StyledButton>
    </>
  )
}

export default Button

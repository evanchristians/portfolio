import styled from 'styled-components'

const SContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`

export const Container = ({children}) => {
  return <SContainer>{children}</SContainer>
}

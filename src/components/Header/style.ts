import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    img {
      max-width: 10rem;
    }
  }
  @media (max-width: 425px) {
    img {
      max-width: 7.375rem;
    }
  }
  @media (max-width: 319px) {
    flex-direction: column;

    img {
      max-width: 80%;
    }

    button {
      margin-top: 1rem;
    }
  }
`

export const newTransitionButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  cursor: pointer;
  transition: 150ms;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`

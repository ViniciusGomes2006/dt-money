import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 70rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }

    @media (max-width: 320px) {
      padding: 0rem;
      text-align: center;
    }

    @media (max-width: 280px) {
      padding: 0rem;
      text-align: center;
      font-size: 0.75rem;
    }
  }
`

export const ButtonSubmitSearchForm = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem 1rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme['green-300']};
  color: ${({ theme }) => theme['green-300']};
  font-weight: bold;

  transition: 200ms;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-500']};
    border: 1px solid ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme.white};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`

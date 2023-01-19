import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 1.5rem 1.5rem 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme['gray-700']};

  border-radius: 6px;

  &.green {
    background-color: ${({ theme }) => theme['green-700']};
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme['gray-300']};
      line-height: 1.6;
    }

    svg {
      font-size: 0;
    }
  }

  strong {
    font-weight: bold;
    font-size: 2rem;
    margin-top: 0.75rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    min-width: 17.5rem;
  }
`

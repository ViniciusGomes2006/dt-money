import styled from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.5rem 2rem;
    background-color: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-radius: 6px 6px 0 0;
    }

    &:last-child {
      border-radius: 0 0 6px 6px;
    }
  }
`

export const TransactionsInfo = styled.div`
  display: flex;
  justify-content: space-between;

  h2,
  span {
    line-height: 1.6;
    font-size: 1.125rem;
    font-weight: 400;
    color: ${({ theme }) => theme['gray-300']};
  }

  span {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TransactionTableMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TransactionInfoMobile = styled.div`
  padding: 1.25rem;
  background-color: ${({ theme }) => theme['gray-700']};

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme['gray-300']};
  }

  span {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.6;
  }
`

export const TransactionDescriptionMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 0.75rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme['gray-500']};
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export interface TypeActionProps {
  action: 'outcome' | 'income'
}

export const PriceAction = styled.span<TypeActionProps>`
  color: ${({ action, theme }) =>
    action === 'income' ? theme['green-300'] : theme['red-300']};
`

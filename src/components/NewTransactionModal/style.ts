import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'
import { TypeActionProps } from '../../pages/Transactions/style'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    left: 0;

    min-width: 100vw;

    padding: 2.5rem 1rem;

    transform: none;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  font-size: 0;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme['gray-500']};
`

export const FormModalContainer = styled.form`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button[type='submit'] {
    height: 58px;
    border: 0;
    background-color: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    padding: 0 1.25rem;

    transition: 150ms;

    &:not(:disabled):hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme['green-700']};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const TransactionTypeButton = styled(RadioGroup.Item)<TypeActionProps>`
  background-color: ${({ theme }) => theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme['gray-300']};

  svg {
    color: ${({ action, theme }) =>
      action === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background-color: ${({ action, theme }) =>
      action === 'income' ? theme['green-500'] : theme['red-500']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`

export const errorMessage = styled.span`
  color: ${({ theme }) => theme['red-300']};
  font-size: 0.875rem;
`

import * as Styled from './style'
import * as Dialog from '@radix-ui/react-dialog'
import Logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export default function Header() {
  const context = useContextSelector(TransactionsContext, (data) => {
    const { UpdateModalFocus, focus } = data
    return { UpdateModalFocus, focus }
  })

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <img src={Logo} alt="" />

        <Dialog.Root
          open={context.focus}
          onOpenChange={context.UpdateModalFocus}
        >
          <Dialog.Trigger asChild>
            <Styled.newTransitionButton>
              Nova transação
            </Styled.newTransitionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  )
}

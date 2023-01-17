import * as Styled from './style'
import * as Dialog from '@radix-ui/react-dialog'
import Logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <img src={Logo} alt="" />

        <Dialog.Root>
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

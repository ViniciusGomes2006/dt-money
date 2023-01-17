import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionsContext'
import { TransactionsPage } from './pages/Transactions'
import { GlobalStyle } from './styles/global/style'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <TransactionProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <TransactionsPage />
      </ThemeProvider>
    </TransactionProvider>
  )
}

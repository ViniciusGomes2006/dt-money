import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { arrayList } = useContext(TransactionsContext)

  const summary = arrayList?.reduce(
    (value, transactions) => {
      if (transactions.type === 'income') {
        value.income += transactions.price
        value.total += transactions.price
      } else {
        value.outcome += transactions.price
        value.total -= transactions.price
      }

      return value
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}

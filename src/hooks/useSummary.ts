import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

// This function calculates the input/output and total
export function useSummary() {
  const arrayList = useContextSelector(TransactionsContext, (data) => {
    return data.arrayList
  })

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

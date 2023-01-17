import { createContext, ReactNode, useEffect, useState } from 'react'
import { requestGet } from '../utils/Request'

export interface responseProps {
  id: number
  description: string
  type: 'outcome' | 'income'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  arrayList: responseProps[] | null
  getArrayList: (url: string, query?: string) => Promise<void>
}

interface TransactionContextProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionContextProps) {
  const [arrayList, setArrayList] = useState<responseProps[] | null>([])

  async function getArrayList(query?: string) {
    const response: responseProps[] | null = await requestGet(query)

    console.log(response)
    setArrayList(response)
  }

  useEffect(() => {
    getArrayList()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        arrayList,
        getArrayList,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

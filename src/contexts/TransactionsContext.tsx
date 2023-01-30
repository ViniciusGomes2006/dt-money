import { AxiosResponse } from 'axios'
import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { requestGet, requestPost } from '../utils/Request'

export interface responseProps {
  id?: number
  description: string
  type: 'outcome' | 'income'
  category: string
  price: number
  createdAt: string
}

export interface CreateNewTransactions {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  arrayList: responseProps[]
  getArrayList: (url: string, query?: string) => Promise<void>
  CreateTransactions: (data: CreateNewTransactions) => Promise<void>
  focus: true | false
  UpdateModalFocus: (data: boolean) => void
}

interface TransactionContextProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionContextProps) {
  const [focus, setFocus] = useState(false)
  // This useState stores a Transaction List to be displayed with map in transaction history
  const [arrayList, setArrayList] = useState<responseProps[]>([])

  // This function makes the 'GET' method in a url being possible to filter what will return
  const getArrayList = useCallback(async (url: string, query?: string) => {
    const response: responseProps[] | undefined = await requestGet(url, query)

    if (!response) return

    setArrayList(response)
  }, [])

  // This function does the 'PUT' method of a new transaction in useState and returns does the set method in useState to update the information
  const CreateTransactions = useCallback(
    async (data: CreateNewTransactions) => {
      const { category, description, price, type } = data
      const createdAt = new Date().toString()

      const newPost: responseProps = {
        category,
        description,
        price,
        type,
        createdAt,
      }

      const newList: AxiosResponse<responseProps> | undefined =
        await requestPost('transactions', newPost)

      if (!newList) return

      setArrayList((state) => [newList.data, ...state])
    },
    [],
  )

  const UpdateModalFocus = useCallback((data: boolean) => {
    setFocus(data)
  }, [])

  // This useEffect makes the first call of the 'GET' method on the arrayList to be rendered when the website is opened
  useEffect(() => {
    getArrayList('transactions')
  }, [getArrayList])

  return (
    <TransactionsContext.Provider
      value={{
        arrayList,
        getArrayList,
        CreateTransactions,
        focus,
        UpdateModalFocus,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

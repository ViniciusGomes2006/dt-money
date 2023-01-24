import * as Styled from './style'
import * as z from 'zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

interface ButtonType {
  type: 'desktop' | 'mobile'
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm({ type }: ButtonType) {
  const getArrayList = useContextSelector(TransactionsContext, (data) => {
    return data.getArrayList
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  // This function is executed when the search button is clicked, it calls the
  // function to do the 'GET' method with the filter of what was typed in the field
  async function handleSubmitTransactions(data: SearchFormInput) {
    await new Promise((resolve) => setTimeout(resolve, 1500))

    getArrayList('transactions', data.query)
  }

  return (
    <Styled.SearchFormContainer
      onSubmit={handleSubmit(handleSubmitTransactions)}
    >
      <input
        type="text"
        placeholder="Busque pelas transações"
        {...register('query')}
      />
      <Styled.ButtonSubmitSearchForm
        type="submit"
        disabled={isSubmitting}
        className={type === 'mobile' ? 'mobileButton' : 'DesktopButton'}
        title="Search"
      >
        <MagnifyingGlass size={20} weight="bold" />
        {type === 'desktop' ? 'Buscar' : ''}
      </Styled.ButtonSubmitSearchForm>
    </Styled.SearchFormContainer>
  )
}

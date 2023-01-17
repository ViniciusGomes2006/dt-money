import * as Styled from './style'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

interface ButtonType {
  type: 'desktop' | 'mobile'
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm({ type }: ButtonType) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const { getArrayList } = useContext(TransactionsContext)

  async function handleSubmitTransactions(data: SearchFormInput) {
    await new Promise((resolve) => setTimeout(resolve, 1500))

    getArrayList(data.query)
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
      >
        <MagnifyingGlass size={20} weight="bold" />
        {type === 'desktop' ? 'Buscar' : ''}
      </Styled.ButtonSubmitSearchForm>
    </Styled.SearchFormContainer>
  )
}

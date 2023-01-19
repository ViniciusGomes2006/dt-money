import * as Dialog from '@radix-ui/react-dialog'
import * as Styled from './style'
import * as z from 'zod'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContext } from 'react'

// This const validates the values filled in the form
const newTransactionsFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

// This type infers the typing of values according to zod validation
type NewTransactionsFormInputs = z.infer<typeof newTransactionsFormSchema>

export function NewTransactionModal() {
  const { CreateTransactions } = useContext(TransactionsContext)

  // This const is being used to destructure the react hook form modules
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionsFormSchema),
  })

  // This function is calling another function in which it records the new
  // transaction in the history and then executes a function to reset the form fields
  function handleSubmitTransactionForm(data: NewTransactionsFormInputs) {
    CreateTransactions(data)

    reset()
  }

  return (
    <Dialog.Portal>
      <Styled.Overlay />

      <Styled.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <Styled.CloseButton>
          <X size={24} />
        </Styled.CloseButton>

        <Styled.FormModalContainer
          onSubmit={handleSubmit(handleSubmitTransactionForm)}
        >
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
            required
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <Styled.TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <Styled.TransactionTypeButton action="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </Styled.TransactionTypeButton>
                  <Styled.TransactionTypeButton
                    action="outcome"
                    value="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </Styled.TransactionTypeButton>
                </Styled.TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </Styled.FormModalContainer>
      </Styled.Content>
    </Dialog.Portal>
  )
}

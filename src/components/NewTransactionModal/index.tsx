import * as Dialog from '@radix-ui/react-dialog'
import * as Styled from './style'
import * as z from 'zod'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

// This const validates the values filled in the form
const newTransactionsFormSchema = z.object({
  description: z
    .string()
    .min(8, { message: 'O minimo de caracter é 8' })
    .max(64, { message: 'O máximo de caracter é 64' }),
  price: z.number().min(1, { message: 'Este campo é obrigatório' }),
  category: z
    .string()
    .min(4, { message: 'O minimo de caracter é 4' })
    .max(16, { message: 'O máximo de caracter é 16' }),
  type: z.enum(['income', 'outcome'], {
    required_error: 'Selecione uma opção',
  }),
})

// This type infers the typing of values according to zod validation
type NewTransactionsFormInputs = z.infer<typeof newTransactionsFormSchema>

export function NewTransactionModal() {
  const context = useContextSelector(TransactionsContext, (data) => {
    const { CreateTransactions, UpdateModalFocus } = data
    return { CreateTransactions, UpdateModalFocus }
  })

  // This const is being used to destructure the react hook form modules
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewTransactionsFormInputs>({
    resolver: zodResolver(newTransactionsFormSchema),
  })

  // This function is calling another function in which it records the new
  // transaction in the history and then executes a function to reset the form fields
  function handleSubmitTransactionForm(data: NewTransactionsFormInputs) {
    context.CreateTransactions(data)
    context.UpdateModalFocus(false)

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
          {errors.description && (
            <Styled.errorMessage>
              {errors.description?.message}
            </Styled.errorMessage>
          )}
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
            required
          />
          {errors.price && (
            <Styled.errorMessage>{errors.price?.message}</Styled.errorMessage>
          )}
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
            required
          />
          {errors.category && (
            <Styled.errorMessage>
              {errors.category?.message}
            </Styled.errorMessage>
          )}

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
          {errors.type && (
            <Styled.errorMessage>{errors.type?.message}</Styled.errorMessage>
          )}

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </Styled.FormModalContainer>
      </Styled.Content>
    </Dialog.Portal>
  )
}

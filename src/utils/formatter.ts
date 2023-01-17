export function NumberToCurreny(value: number) {
  const newValue = value.toLocaleString('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
  return `R$ ${newValue}`
}

export const dateToString = new Intl.DateTimeFormat('pt-BR')

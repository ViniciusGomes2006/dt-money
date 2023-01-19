// This function converts numbers to string with currency formatting
export function NumberToCurreny(value: number) {
  const newValue = value.toLocaleString('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
  return `R$ ${newValue}`
}

// This const converts dates to formatted strings so they can be read.
export const dateToString = new Intl.DateTimeFormat('pt-BR')

import * as Styled from './style'
import { NumberToCurreny } from '../../../../utils/formatter'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

interface card {
  name: 'enter' | 'exit' | 'total'
  CurrencyValue: number
  classColor?: undefined | 'green'
}

const NAME_VALUE = {
  enter: 'Entradas',
  exit: 'Saídas',
  total: 'Total',
} as const

const SUMMARY_ICONS = {
  enter: <ArrowCircleUp size={32} color="#00B37E" />,
  exit: <ArrowCircleDown size={32} color="#F75A68" />,
  total: <CurrencyDollar size={32} color="#FFF" />,
}

export function SummaryCard({ name, CurrencyValue, classColor }: card) {
  const NumberToStringCurrency = NumberToCurreny(CurrencyValue)

  return (
    <Styled.CardContainer className={classColor}>
      <header>
        <span>{NAME_VALUE[name]}</span>

        {SUMMARY_ICONS[name]}
      </header>

      <strong>{NumberToStringCurrency}</strong>
    </Styled.CardContainer>
  )
}

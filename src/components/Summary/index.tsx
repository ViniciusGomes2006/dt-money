import { useSummary } from '../../hooks/useSummary'
import { SummaryCard } from './components/card'
import * as Styled from './style'

export function Summary() {
  // This function calculates the input/output and total
  const summary = useSummary()

  return (
    <Styled.SummaryContainer>
      <SummaryCard name="enter" CurrencyValue={summary ? summary.income : 0} />
      <SummaryCard name="exit" CurrencyValue={summary ? summary.outcome : 0} />
      <SummaryCard
        name="total"
        CurrencyValue={summary ? summary.total : 0}
        classColor="green"
      />
    </Styled.SummaryContainer>
  )
}

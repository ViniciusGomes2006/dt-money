import { CalendarBlank, TagSimple } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateToString, NumberToCurreny } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import * as Styled from './style'

export function TransactionsPage() {
  const [widthScreen, setWidthScreem] = useState(0)
  const { arrayList } = useContext(TransactionsContext)

  useEffect(() => {
    setWidthScreem(window.screen.width)
  }, [])

  const desktopTable = () => (
    <Styled.TransactionTable>
      <tbody>
        {arrayList &&
          arrayList.map((data, key) => (
            <tr key={key}>
              <td>{data.description}</td>
              <td>
                <Styled.PriceAction action={data.type}>
                  {data.type === 'outcome' && '- '}
                  {NumberToCurreny(data.price)}
                </Styled.PriceAction>
              </td>
              <td>{data.category}</td>
              <td>{dateToString.format(new Date(data.createdAt))}</td>
            </tr>
          ))}
      </tbody>
    </Styled.TransactionTable>
  )

  const mobileTable = () => (
    <Styled.TransactionTableMobile>
      {arrayList &&
        arrayList.map((data, key) => (
          <Styled.TransactionInfoMobile key={key}>
            <h3>{data.description}</h3>
            <Styled.PriceAction action={data.type}>
              {NumberToCurreny(data.price)}
            </Styled.PriceAction>
            <Styled.TransactionDescriptionMobile>
              <p>
                <TagSimple size={16} />
                {data.category}
              </p>
              <p>
                <CalendarBlank size={16} />
                {dateToString.format(new Date(data.createdAt))}
              </p>
            </Styled.TransactionDescriptionMobile>
          </Styled.TransactionInfoMobile>
        ))}
    </Styled.TransactionTableMobile>
  )

  return (
    <div>
      <Header />
      <Summary />

      <Styled.TransactionContainer>
        {widthScreen < 769 && (
          <Styled.TransactionsInfo>
            <h2>Transações</h2>
            <span>4 itens</span>
          </Styled.TransactionsInfo>
        )}
        <SearchForm type={widthScreen > 768 ? 'desktop' : 'mobile'} />

        {widthScreen > 768 ? desktopTable() : mobileTable()}
      </Styled.TransactionContainer>
    </div>
  )
}

import styled from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 768px) {
    max-width: none;
    overflow-x: auto;
    padding-bottom: 1.5rem;

    display: flex;
    grid-template-columns: none;
  }
`

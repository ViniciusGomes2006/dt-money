import axios from 'axios'
import { responseProps } from '../contexts/TransactionsContext'

const api = axios.create({
  baseURL: 'http://localhost:4000/',
})

export async function requestGet(query?: string) {
  try {
    const { data } = await api.get<responseProps[] | null>(`transactions`, {
      params: {
        q: query,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function requestGetId(url: string, id: number) {
  try {
    const { data } = await api.get(`${url}/${id}`)
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

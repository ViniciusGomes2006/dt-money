import axios from 'axios'
import { responseProps } from '../contexts/TransactionsContext'

const api = axios.create({
  baseURL: 'http://localhost:4000/',
})

// This function makes the 'GET' method in a url being possible to filter the result
export async function requestGet(url: string, query?: string) {
  try {
    const { data } = await api.get<responseProps[] | undefined>(url, {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
    return undefined
  }
}

// This function makes the 'POST' method in a url with the received data
export async function requestPost(url: string, data: responseProps) {
  try {
    const response = await api.post<responseProps>(url, data)
    return response
  } catch (error) {
    console.error(error)
    return undefined
  }
}

// This function makes the 'GET' method in a url being possible to filter the id
export async function requestGetId(url: string, id: number) {
  try {
    const { data } = await api.get(`${url}/${id}`)
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

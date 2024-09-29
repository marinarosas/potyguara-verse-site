import { parseCookies } from 'nookies'
import useSWR from 'swr'
import { IEventShow } from '@/types/eventShow'
import { poty } from '../../api'

interface IResponse {
  events: IEventShow[]
}
export function useListEventsAll() {
  const { 'potyverse@token': token } = parseCookies()

  const { data, error, isLoading, isValidating, mutate } = useSWR<IResponse>(
    `/events`,
    (url) =>
      poty
        .get(url, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data),
  )

  return {
    events: data,
    error,
    isLoading,
    isValidating,
    mutateEvents: mutate,
  }
}

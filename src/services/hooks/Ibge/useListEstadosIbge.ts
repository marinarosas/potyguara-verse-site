import useSWR from 'swr'
import { IEstadosIBGE } from '@/types/ibge'
import axios from 'axios'

type IResponse = IEstadosIBGE[]

export function useListEstadosIBGE() {
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID
  const apiMasterKey = process.env.NEXT_PUBLIC_API_MASTER_KEY

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'X-Tenant-ID': tenantId,
      'X-API-Master-Key': apiMasterKey,
    },
  }

  const { data, error, isLoading, isValidating, mutate } = useSWR<IResponse>(
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    (url: string) =>
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`,

          {
            id: '',
            nome: '',
            sigla: '',
            regiao: {
              id: '',
              nome: '',
              sigla: '',
            },
          },
          axiosConfig,
        )
        .then((res) => res.data),
  )

  return {
    estados: data,
    error,
    isLoading,
    isValidating,
    mutateEstados: mutate,
  }
}

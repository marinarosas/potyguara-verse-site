import { parseCookies } from 'nookies'
import useSWR from 'swr'
import { IMunicipioIbge } from '@/types/ibge'
import axios from 'axios'

type IResponse = IMunicipioIbge[]

export function useFindMunicipioByEstadosIbge(estado: string) {
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
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`,
    (url: string) =>
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`,

          {
            artist: {
              username: '',
              name: '',
              numberstreet: '',
              address: '',
              complement: '',
              country: '',
              state: '',
              city: '',
              email: '',
              aboutartist: '',
              zipcode: '',
              documentnumber: '',
              allownotifications: '',
            },
          },
          axiosConfig,
        )
        .then((res) => res.data),
  )

  return {
    municipios: data,
    error,
    isLoading,
    isValidating,
    mutateMunicipios: mutate,
  }
}

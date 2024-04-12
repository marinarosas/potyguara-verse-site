// import { parseCookies } from "nookies";
import useSWR from "swr";
import { IArtist } from "@/types/artist";
import axios from "axios";

type IResponse = IArtist[];

export function useListArtistAll() {

  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;
  const apiMasterKey = process.env.NEXT_PUBLIC_API_MASTER_KEY;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-Tenant-ID": tenantId,
      "X-API-Master-Key": apiMasterKey,
    },
  };

  const { data, error, isLoading, isValidating, mutate } = useSWR<IResponse>(
    `https://api.ycodify.com/v2/persistence/q/s/no-ac`,
    (url: string) =>
      axios
        .post(
          `https://api.ycodify.com/v2/persistence/q/s/no-ac`,

          {
            userplayer: {
              username: "",
              name: "",
              numberstreet: "",
              address: "",
              complement: "",
              country: "",
              state: "",
              city: "",
              email: "",
              aboutartist: "",
              zipcode: "",
              documentnumber: "",
              allownotifications: "",
            },
          },
          axiosConfig
        )
        .then((res) => res.data)
  );

  return {
    artists: data,
    errorArtists: error,
    isLoadingArtists: isLoading,
    isValidatingArtists: isValidating,
    mutateArtists: mutate,
  };
}

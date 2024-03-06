// import { parseCookies } from "nookies";
import useSWR from "swr";
import { IArtist } from "@/types/artist";
import axios from "axios";

type IResponse = [IArtist[]];

export function useListArtistAll() {
  //   const { "icone@token": token } = parseCookies();

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-Tenant-ID": '19379587-75b0-3aec-9717-46c6e26757e3',
      "X-API-Master-Key": 'ed950147-a6fc-3d45-a69c-bfc55f414ae6',
    },
  };

  const { data, error, isLoading, isValidating, mutate } = useSWR<IResponse>(
    `https://api.ycodify.com/v2/persistence/q/s/no-ac`,
    (url: string) =>
      axios
        .post(
          `https://api.ycodify.com/v2/persistence/q/s/no-ac`,
          [
            {
              artist: {
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
          ],
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

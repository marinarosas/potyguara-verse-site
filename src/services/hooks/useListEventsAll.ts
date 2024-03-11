// import { parseCookies } from "nookies";
import useSWR from "swr";
import axios from "axios";
import { IEventShow } from "@/types/eventShow";

type IResponse = IEventShow[];

export function useListEventsAll() {
  //   const { "icone@token": token } = parseCookies();

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
            evento: {
                artist: "",
                eventdata: "",
                nameevent: "",
                timeevent: "",
                durantionevent: "",
                price: "",
                description: "",
                statuspayment: "",
                ecad: ""
              }
          },
          axiosConfig
        )
        .then((res) => res.data)
  );

  return {
    events: data,
    errorEvents: error,
    isLoadingEvents: isLoading,
    isValidatingEvents: isValidating,
    mutateEvents: mutate,
  };
}

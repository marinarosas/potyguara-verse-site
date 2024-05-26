"use server";
import { ycodifyQuery } from "../api";

type TGetUserPlayer = {
  username: string;
};

export async function getUserPlayer({ username }: TGetUserPlayer) {
  const { data: responseData } = await ycodifyQuery.post(
    "/persistence/q/s/no-ac",
    JSON.stringify([
      {
        userplayer: {
          username,
          streetname: "",
          streetnumber: "",
          streetcomplement: "",
          country: "",
          state: "",
          city: "",
          zipcode: "",
          email: "",
          name: "",
          aboutartist: "",
          documentnumber: "",
          allownotifications: "",
          avatar: "",
          skins: "",
          role: "",
          acceptplataformterms: "",
        },
      },
    ])
  );

  return responseData.at(0).userplayer.at(0);
}
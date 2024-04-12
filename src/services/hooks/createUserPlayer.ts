"use server";
import { ycodifyQuery } from "../api";

type TPlayer = {
  username: string;
  streetname: string;
  streetnumber: string;
  streetcomplement: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  email: string;
  name: string;
  aboutartist: string;
  documentnumber: string;
  allownotifications: boolean;
  avatar: string;
  skins: string;
  role: string;
  acceptplataformterms: boolean;
  artisticname: string,
};

export async function createUserPlayer(data: TPlayer) {
  const { data: responseData } = await ycodifyQuery.post(
    "/persistence/c/s/no-ac",
    JSON.stringify({
      action: "CREATE",
      data: [
        {
          userplayer: {
            username: data.username,
            streetname: data.streetname,
            streetnumber: data.streetnumber,
            streetcomplement: data.streetcomplement,
            country: data.country,
            state: data.state,
            city: data.city,
            zipcode: data.zipcode,
            email: data.email,
            name: data.name,
            aboutartist: data.aboutartist,
            documentnumber: data.documentnumber,
            allownotifications: data.allownotifications,
            avatar: data.avatar,
            skins: data.skins,
            role: data.role,
            acceptplataformterms: data.acceptplataformterms,
            artisticname: data.artisticname,
          },
        },
      ],
    })
  );

  return responseData;
}
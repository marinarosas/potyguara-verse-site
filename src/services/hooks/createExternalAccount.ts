"use server";
import { toast } from "@/components/ui/use-toast";
import { ycodifyExternal } from "../api";

export type TSignupSchema = {
  username: string;
  email: string;
  password: string;
  // role: "ARTIST" | "VIEWER";
  role: string;
  organizationUuid: string;
};

export async function createExternalAccount(data: TSignupSchema) {
  try {
    const clientExists = await ycodifyExternal
      .get(`/id/open/account/by/username/${data.username}/exists`)
      .then((res) => res.status === 200);

    if (clientExists) {
      throw new Error("Usuário já cadastrado");
    }

    const { data: responseData } = await ycodifyExternal.post(
      "/id/open/account-role",
      {
        account: {
          username: data.username,
          password: data.password,
          email: data.email,
        },
        role: {
          name: data.role,
          owner: data.organizationUuid,
        },
      }
    );

    // toast({
    //   title: "Uhuu! Cadastro realizado com sucesso.",
    //   description: "Cadastro do usuário criado com sucesso.",
    // });

    return responseData;

    

  } catch (err: unknown) {
    console.log("signup error", err);

    // toast({
    //   title: "Ops! Algo deu errado.",
    //   description: "O cadastro não foi criado, fale com a central.",
    // });
    
    return {
      error: err,
    };
  }
}
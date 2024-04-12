"use server";

import { ycodifyExternal } from "../api";

export async function loginSubmit({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const { data } = await ycodifyExternal.post("/auth/signin", {
      username,
      password,
    });

    return data;
  } catch (err) {
    return {
      // @ts-ignore
      error: err.message,
    };
  }
}
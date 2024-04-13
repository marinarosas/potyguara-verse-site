import axios from "axios";

const YCODIFY_BASE_URL = "https://api.ycodify.com/v2";

export const ycodifyExternal = axios.create({
  baseURL: YCODIFY_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ycodifyQuery = axios.create({
  baseURL: YCODIFY_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Tenant-ID": process.env.NEXT_PUBLIC_TENANT_ID,
    "X-API-Master-Key": process.env.NEXT_PUBLIC_API_MASTER_KEY,
  },
});

export async function insertData(query: any) {
  const { data } = await ycodifyQuery.post(
    "/persistence/c/s/no-ac",
    JSON.stringify(query)
  );

  return data;
}
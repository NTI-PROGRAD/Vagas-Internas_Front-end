import { isAxiosError, } from "axios";
import { api, } from "../lib/axios";

export type IsAuthenticatedResponse = {
  message: string;
  validAuthentication: boolean;
};

export type IsAuthenticatedRequest = {
  token: string;
}

export async function isAuthenticated(): Promise<IsAuthenticatedResponse>
{
  const token = sessionStorage.getItem("vagas-internas-user-token",);

  try
  {
    const response = await api.post<IsAuthenticatedResponse>("autenticacao/isAuthenticated", { token, },);
    return response.data;
  }
  catch(error)
  {
    if (isAxiosError(error,)){
      return error.response?.data;
    }

    const defaultErrorObject: IsAuthenticatedResponse = {
      message: "Erro não especificado, falha na autenticação!",
      validAuthentication: false,
    };

    return defaultErrorObject;
  }
}
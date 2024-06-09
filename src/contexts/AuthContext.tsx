/* eslint-disable react-hooks/exhaustive-deps */
import { parseCookies, setCookie } from "nookies";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { useToast } from "@/components/ui/use-toast";

import { usePathname, useRouter } from "next/navigation";
import { poty } from "@/services/api";
import { AxiosError } from "axios";

interface IUser {
  id: string | undefined;
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  role?: string
}

interface ISignIn {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(data: ISignIn): Promise<void>
  meRefetch: () => Promise<void>
  setToken: Dispatch<SetStateAction<string | undefined>>
  user: IUser
  token: string | undefined
  isLoading: boolean
  signIn(data: ISignIn): Promise<void>;
  logout(): void;
}

interface Props {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: Props) {
  const { toast } = useToast();
  const router = useRouter();

  const asPath = usePathname();

  const [user, setUser] = useState<IUser>({} as IUser);
  const [token, setToken] = useState<string | undefined>("");
  const [isLoading, setIsloading] = useState(false);

  const signIn = useCallback(
    async ({ email, password }: ISignIn) => {
      try {
        const {
          data: { user, token },
        } = await poty.post("/sing-in", { email, password });

        if (user.disabled) {
          toast({
            title: "Ops!",
            description: "Usuário desabilitado, contate o administrador",
            duration: 3000,
            type: "background",
            variant: "default",
          });

          return;
        }

        if (user?.tipo_usuario?.tipo === "VIEWER") {
          toast({
            title: "Ops!",
            description: "Acesso não autorizado",
            duration: 3000,
            type: "background",
            variant: "default",
          });

          return;
        }

        setCookie(undefined, "potyverse@token", String(token), {
          maxAge: 60 * 60 * 24 * 30, // 30 days,
          path: "/",
        });

        setUser({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          role: user.role,
        });

        setToken(token);

        poty.defaults.headers.Authorization = `Bearer ${token}`;

        router.push("/app/dashboard");

        toast({
          title: "Sucesso!",
          description: "Estamos redirecionando para o dashboard",
          duration: 3000,
          type: "background",
          variant: "default",
        });
      } catch (error) {
        if (error instanceof AxiosError) {
          toast({
            title: "Ops!",
            description: error.response?.data?.message
              ? error.response?.data?.message
              : "Verifique as informações fornecidas",
            duration: 3000,
            type: "background",
            variant: "default",
          });

          return;
        }

        toast({
          title: "Ops!",
          description: "Ocorreu um erro",
          duration: 3000,
          type: "background",
          variant: "default",
        });

        // console.log(error.response?.data?.message)
      }
    },
    [router, toast]
  );

  useEffect(() => {
    const { "potyverse@token": token } = parseCookies();

    setIsloading(true);

    poty
      .get("/users/me", { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data: { user, token } }) => {
        setUser({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          role: user.role,
        });

        setToken(token);

        setIsloading(false);

        poty.defaults.headers.Authorization = `Bearer ${token}`;

        if (asPath === "/") {
          router.push("/app/dashboard");
        }
      })
      .catch(() => {
        setIsloading(false);

        if (!asPath.startsWith("/password")) {
          router.push("/");
        }
      });
  }, [router]);

  const meRefetch = useCallback(async () => {
    if (token) {
      const {
        data: { user, token: newToken },
      } = await poty.get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser({
        id: user.id,
        name: user.name,
        username: user.usersame,
        email: user.email,
        role: user.role,
      });

      setToken(newToken);
    }
  }, [token, setUser, setToken]);

  const logout = useCallback(() => {
    setCookie(undefined, "potyverse@token", "", {
      maxAge: 0,
      path: "/",
    });

    setUser({} as IUser);

    setToken("");

    router.push("/");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        token,
        meRefetch,
        isLoading,
        setToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

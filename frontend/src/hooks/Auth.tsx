/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { api } from "../services/api";

interface User {
  name: string;
  email: string;
  senha: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface SigninResponse {
  user: User;
  token: string;
}

interface AuthContextData {
  auth: AuthState;
  signin(data: SigninProps): Promise<void>;
  signout(): void;
}

interface SigninProps {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const AUTH_TOKEN_STORAGE_KEY = "@flexge:token";
  const AUTH_USER_STORAGE_KEY = "@flexge:user";

  const [auth, setAuth] = useState<AuthState>(() => {
    const user = localStorage.getItem(AUTH_USER_STORAGE_KEY);
    const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);

    if (user && token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signin = useCallback(async ({ email, password }: SigninProps) => {
    const response = await api.post<SigninResponse>("/sessions", {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
    localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(user));

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    setAuth({
      user,
      token,
    });
  }, []);

  const signout = useCallback(() => {
    setAuth({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth should be used within an AuthProvider");
  }

  return context;
}

export { useAuth, AuthProvider };

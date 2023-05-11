"use client"
import React, { useContext, useEffect } from 'react';
import {LocalStorageKeys} from "../constants/local-storage-keys";
import { AuthContextType,Auth,LoginCredentials } from "../types/auth-types";
import {login, logout} from "../services/auth-service";
import {useRouter} from "next/navigation";


const AuthContext = React.createContext<AuthContextType>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

// @ts-ignore
export const AuthContextProvider = (props) => {
  const router = useRouter();
  const [auth, setAuth] = React.useState<Auth>(
      // @ts-ignore
      window ? (localStorage.getItem(LocalStorageKeys.AUTH) ? JSON.parse(localStorage.getItem(LocalStorageKeys.AUTH)) : null): null,
  );



  const signOut= async () => {
    return logout().then((auth) => {
      setAuth(auth);
        window ? localStorage.removeItem(LocalStorageKeys.AUTH): '';
      router.push('/login');
    })
        .catch((e) => {
          console.error(e);
        });
  };

  const signIn = async (credentials: LoginCredentials) => {
    return login(credentials).then((auth) => {
      setAuth(auth);
        window ? localStorage.setItem(LocalStorageKeys.AUTH, JSON.stringify(auth)):'';
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        auth,
        token: auth?.token,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

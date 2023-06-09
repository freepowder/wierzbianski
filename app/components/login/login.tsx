"use client"
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import Spinner from "../../components/spinner/spinner";
import { useRouter } from 'next/navigation';
import {LoginCredentials} from "@/app/types";
import {toast} from "react-toastify";
import {login} from "@/app/services/auth-service";
import {LocalStorageKeys} from "@/app/constants";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

    const router = useRouter();

   const [loading, setLoading] = useState(false);

  const onLoginClick = (credentials: LoginCredentials) => {
        setLoading(true);
        login(credentials)
            .then((auth) => {
                localStorage.setItem(LocalStorageKeys.AUTH, JSON.stringify(auth));
                router.push('/admin/dashboard');
                toast('You are logged In!', {
                    position: "top-right",
                    autoClose: 10000,
                    type:'success',
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(() => {
                setLoading(false);
                toast('Ooops login failed!', {
                    position: "top-right",
                    autoClose: 10000,
                    type:'error',
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
  };


  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-[#333333]">


      <div className="p-10 rounded-md shadow-md w-1/4 dark:bg-[#000]">

        {loading ? <div className="p-10 mx-auto py-10"><Spinner/></div> :
        <>
        <h2 className="text-2xl font-bold mb-5 text-center text-white">Login</h2>
        <form className="space-y-4 " onSubmit={handleSubmit(onLoginClick)}>
          <div>
            <label htmlFor="email" className="text-md font-medium text-white block">Email</label>
            <input id="email"  type="email" {...register("email", { required: true })}
                   className="mt-1 p-2 block w-full rounded-md border-gray-800 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
          </div>
          <div>
            <label htmlFor="password" className="text-md font-medium text-white block">Password</label>
            <input id="password"  type="password" {...register("password", { required: true })}
                   className="mt-1 p-2 block w-full rounded-md border-gray-800 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
          </div>
          <div className="flex justify-end">
          <button type="submit"
                  className="bg-green-500 text-white text-md rounded-full px-16 py-2 my-4">Login
          </button>
          </div>
        </form>
        </>
        }
      </div>


    </div>

);
}

export default Login;

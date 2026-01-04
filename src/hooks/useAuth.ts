import { useMutation } from "@tanstack/react-query";
import { login, signup } from "../api/AuthApi";

export const useLogin=()=>{
   return useMutation({
        mutationFn:({email,password}:{email:string;password:string})=>login(email,password)
    })
}

export const useSignup = () =>
  useMutation({
    mutationFn: signup,
  });


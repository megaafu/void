"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";
import { AuthResponse } from "@/entities/Auth";
import { LoginFormValues } from "@/utils/zodSchema";

export const useAuth = () => {
  const router = useRouter();

  const loginMutation = useMutation<AuthResponse, Error, LoginFormValues>({
    mutationFn: (data) => login(data.username, data.password),
    onSuccess: (data) => {

      localStorage.setItem("token", data.data.token);
      alert("Login bem-sucedido!");
      router.push("/dashboard");
    },
    onError: () => alert("Falha na autenticação"),
  });

  return { loginMutation };
};


"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/authService";
import { AuthResponse } from "@/entities/Auth";
import { useRouter } from "next/navigation";

const schema = z.object({
  username: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
});

type LoginFormInputs = z.infer<typeof schema>;

const LoginForm = () => {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: zodResolver(schema) });

  const mutation = useMutation<AuthResponse, Error, LoginFormInputs>({
    mutationFn: (data) => login(data.username, data.password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      alert("Login bem-sucedido!");
      router.push("dashboard");
    },
    onError: () => alert("Falha na autenticação"),
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-xl font-bold">Login</h2>
        <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="mt-4">
          <div className="mb-4">
            <label className="label">Username</label>
            <input type="email" {...register("username")} className="input input-bordered w-full" />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>

          <div className="mb-4">
            <label className="label">Password</label>
            <input type="password" {...register("password")} className="input input-bordered w-full" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;


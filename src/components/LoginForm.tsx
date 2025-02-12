"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { LoginFormValues, loginSchema } from "@/utils/zodSchema";
import { useAuth } from "@/hooks/useAuth";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const { loginMutation } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-xl font-bold">Login</h2>
        <form onSubmit={handleSubmit((data) => loginMutation.mutate(data))} className="mt-4">
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


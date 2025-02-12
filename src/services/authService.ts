import { AuthResponse } from "@/entities/Auth";
import axiosInstance from "@/utils/axiosInstance";

export const login = async (
  username: string,
  password: string,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>("users/login", {
    username,
    password,
  });
  return response.data;
};

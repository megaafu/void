import { Insumos } from "@/entities/Insumos";
import axiosInstance from "@/utils/axiosInstance";

export const getInsumos = async (): Promise<Insumos> => {
  const response = await axiosInstance.get(
    "analytics/farm-inputs/23e9336a-b20a-4478-a58f-875cc065e871",
    {
      params: {
        phase: "nurseries",
      },
    },
  );
  return response.data.data;
};

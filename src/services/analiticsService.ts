import { Analitics } from "@/entities/Analitics";
import axiosInstance from "@/utils/axiosInstance";

export const getAnalitics = async (): Promise<Analitics> => {
  const response = await axiosInstance.get(
    "last-week/de190ded-d23c-410c-89ac-89faf4dfb36a",
    {
      params: {
        limit: 10,
      },
    },
  );
  return response.data.data;
};

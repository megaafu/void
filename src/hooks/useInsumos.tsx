import { getInsumos } from "@/services/insumosService";
import { useQuery } from "@tanstack/react-query"

export const useInsumos = () => {
  const insumosKey = ['insumos'];

  const insumosQuery = useQuery({
    queryKey: insumosKey,
    queryFn: getInsumos,
  });

  return {
    insumosQuery,
  }
}

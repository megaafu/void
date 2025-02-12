import { getAnalitics } from "@/services/analiticsService";
import { useQuery, useQueryClient } from "@tanstack/react-query"

export const useAnalitics = () => {
  const analiticsKey = ['analitics'];

  const analiticsQuery = useQuery({
    queryKey: analiticsKey,
    queryFn: getAnalitics,
  });

  return {
    analiticsQuery,
  }
}

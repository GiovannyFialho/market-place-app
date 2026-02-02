import { useQuery } from "@tanstack/react-query";

import { getCreditCards } from "@/shared/services/credit-card.service";

export function useGetCreditCards() {
  const query = useQuery({
    queryFn: getCreditCards,
    queryKey: ["credit-cards"],
    staleTime: 1000 * 60 * 5, // 5min
  });
}

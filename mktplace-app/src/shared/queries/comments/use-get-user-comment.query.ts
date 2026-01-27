import { useQuery } from "@tanstack/react-query";

import { getUserComment } from "@/shared/services/product.service";

export function useGetUserCommentQuery(productId: number) {
  const query = useQuery({
    queryFn: () => getUserComment(productId),
    queryKey: ["user-comment", productId],
    staleTime: 1000 * 60 * 5, // 5 min
  });

  return query;
}

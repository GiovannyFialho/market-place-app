import { useQuery } from "@tanstack/react-query";

import { getProductDetails } from "../../services/product.service";

export function useGetProductDetails(productId: number) {
  const query = useQuery({
    queryFn: () => getProductDetails(productId),
    queryKey: ["product-details", productId],
  });

  return query;
}

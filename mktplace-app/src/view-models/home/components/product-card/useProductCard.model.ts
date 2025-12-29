import { ProductInterface } from "../../../../shared/interfaces/product";

interface UseProductCardViewModelParams {
  product: ProductInterface;
}

export function useProductCardViewModel({
  product,
}: UseProductCardViewModelParams) {
  return {
    product,
  };
}

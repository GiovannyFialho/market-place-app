import { useInfiniteQuery } from "@tanstack/react-query";
import { buildImageURL } from "../../helpers/build-image-url";
import { getProductComments } from "../../services/product.service";

export function useGetProductCommentsInfiniteQuery(productId: number) {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) =>
      getProductComments({
        productId,
        pagination: { page: pageParam, perPage: 20 },
      }),
    queryKey: ["product-comments", productId],
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
    initialPageParam: 1,
  });

  const comments =
    query.data?.pages
      .flatMap((page) => page.data)
      .map((comment) => ({
        ...comment,
        user: {
          ...comment.user,
          avatar: buildImageURL(comment.user.avatar?.url ?? ""),
        },
      })) ?? [];

  return { ...query, comments };
}

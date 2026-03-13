import { useInfiniteQuery } from "@tanstack/react-query";

import { buildImageURL } from "@/shared/helpers/build-image-url";
import { ProductComment } from "@/shared/interfaces/product-comment";
import { getProductComments } from "@/shared/services/product.service";

export const useGetProductCommentsInfiniteQuery = (productId: number) => {
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

  function isImageUrl(url?: string): url is string {
    return (
      typeof url === "string" &&
      /\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(url)
    );
  }

  const comments: ProductComment[] =
    query.data?.pages
      .flatMap((page) => page.data)
      .map((comment) => ({
        ...comment,
        user: {
          ...comment.user,
          avatar: {
            url: isImageUrl(comment.user.avatar?.url)
              ? buildImageURL(comment.user.avatar.url)
              : undefined,
          },
        },
      })) ?? [];

  return {
    ...query,
    comments,
  };
};

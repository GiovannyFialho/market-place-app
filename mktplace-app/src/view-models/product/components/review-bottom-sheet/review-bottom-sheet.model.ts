import { useEffect, useState } from "react";

import { useGetUserCommentQuery } from "@/shared/queries/comments/use-get-user-comment.query";

interface RatingFormInterface {
  content: string;
  rating: number;
  isEditing: boolean;
}

const initialRatingForm: RatingFormInterface = {
  rating: 0,
  content: "",
  isEditing: false,
};

export function useReviewBottomSheetViewModel(productId: number) {
  const [ratingForm, setRatingForm] =
    useState<RatingFormInterface>(initialRatingForm);

  const { data: userComment, isLoading: isLoadingUserComment } =
    useGetUserCommentQuery(productId);

  function handleRatingChange(rating: number) {
    setRatingForm((prevData) => ({
      ...prevData,
      rating,
    }));
  }

  function handleContentChange(content: string) {
    setRatingForm((prevData) => ({
      ...prevData,
      content,
    }));
  }

  useEffect(() => {
    if (userComment && userComment.rating && userComment.content) {
      setRatingForm({
        rating: userComment.rating,
        content: userComment.content,
        isEditing: true,
      });
    } else {
      setRatingForm(initialRatingForm);
    }
  }, [userComment]);

  return { ratingForm, handleRatingChange, handleContentChange };
}

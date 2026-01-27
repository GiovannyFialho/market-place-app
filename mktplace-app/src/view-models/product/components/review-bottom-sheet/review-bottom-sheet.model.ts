import { useEffect, useState } from "react";
import { Toast } from "toastify-react-native";

import { useCreateCommentMutation } from "@/shared/queries/comments/use-create-comment.mutation";
import { useGetUserCommentQuery } from "@/shared/queries/comments/use-get-user-comment.query";
import { useUpdateCommentMutation } from "@/shared/queries/comments/use-update-comment.mutation";

interface RatingFormInterface {
  content: string;
  rating: number;
  isEditing: boolean;
  commentId?: number;
}

const initialRatingForm: RatingFormInterface = {
  content: "",
  rating: 0,
  isEditing: false,
  commentId: undefined,
};

export function useReviewBottomSheetViewModel(productId: number) {
  const [ratingForm, setRatingForm] =
    useState<RatingFormInterface>(initialRatingForm);

  const { data: userComment, isLoading: isLoadingUserComment } =
    useGetUserCommentQuery(productId);

  const createCommentMutation = useCreateCommentMutation(productId);

  const updateCommentMutation = useUpdateCommentMutation(productId);

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

  async function handleFormSubmit() {
    if (ratingForm.rating === 0) {
      Toast.warn("Por favor, selecione uma nota.", "top");
    }

    if (!ratingForm.content.trim()) {
      Toast.warn("Por favor, escreva um comentário.", "top");
    }

    const { isEditing, ...formData } = ratingForm;

    if (isEditing) {
      updateCommentMutation.mutateAsync({
        ...formData,
        commentId: formData.commentId!,
      });
    } else {
      createCommentMutation.mutateAsync({
        ...formData,
        productId,
        rating: formData.rating,
      });
    }
  }

  useEffect(() => {
    if (userComment && userComment.comment && userComment.rating) {
      setRatingForm({
        rating: userComment.rating,
        content: userComment.comment.content,
        isEditing: true,
        commentId: userComment.comment.id,
      });
    } else {
      setRatingForm(initialRatingForm);
    }
  }, [userComment]);

  const isLoading =
    createCommentMutation.isPending || updateCommentMutation.isPending;

  return {
    ratingForm,
    isLoading,
    handleRatingChange,
    handleContentChange,
    handleFormSubmit,
  };
}

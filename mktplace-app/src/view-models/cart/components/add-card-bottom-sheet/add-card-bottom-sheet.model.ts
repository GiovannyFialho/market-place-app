import { useCreateCreditCardMutation } from "@/shared/queries/credit-cards/use-create-credit-card.mutatio";

export function useAddCardBottomSheetViewModel() {
  const createCreditCardMutation = useCreateCreditCardMutation();

  function handleCreateCreditCard() {
    createCreditCardMutation.mutate({
      CVV: 123,
      expirationDate: "",
      number: "",
    });
  }

  return { handleCreateCreditCard };
}

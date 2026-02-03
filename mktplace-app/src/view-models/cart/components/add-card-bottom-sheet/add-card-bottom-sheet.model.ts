import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useCreateCreditCardMutation } from "@/shared/queries/credit-cards/use-create-credit-card.mutatio";
import {
  CreditCardFormData,
  creditCardSchema,
} from "@/view-models/cart/components/add-card-bottom-sheet/credit-card.schema";

export function useAddCardBottomSheetViewModel() {
  const createCreditCardMutation = useCreateCreditCardMutation();

  const { control } = useForm<CreditCardFormData>({
    defaultValues: {
      titularName: "",
      number: "",
      expirationDate: "",
      CVV: "",
    },
    resolver: zodResolver(creditCardSchema),
  });

  function handleCreateCreditCard() {
    createCreditCardMutation.mutate({
      CVV: 123,
      expirationDate: "",
      number: "",
    });
  }

  return { control, handleCreateCreditCard };
}

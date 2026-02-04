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

  function cardNumberMask(value: string) {
    const cleaned = value.replace(/\D/g, "");

    return cleaned.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  }

  function expirationDateMask(value: string) {
    const cleaned = value.replace(/\D/g, "");

    if (cleaned.length <= 2) return cleaned;

    const month = cleaned.slice(0, 2);
    const year = cleaned.slice(2);

    if (year.length > 0) {
      return `${month}/${year}`;
    }

    return month;
  }

  return {
    control,
    handleCreateCreditCard,
    cardNumberMask,
    expirationDateMask,
  };
}

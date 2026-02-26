import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { useCreateCreditCardMutation } from "@/shared/queries/credit-cards/use-create-credit-card.mutatio";
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store";

import {
  CreditCardFormData,
  creditCardSchema,
} from "@/view-models/cart/components/add-card-bottom-sheet/components/credit-card/credit-card.schema";

export type FocusedField = "number" | "name" | "expiry" | "cvv";

function formatExpirationDateFormApi(
  dateString: string,
  setError: (message: string) => void,
): string {
  const [month, year] = dateString.split("/").map(Number);

  if (month < 1 || month > 12) {
    setError("Mês inválido");
    throw new Error("Mês inválido");
  }

  if (year < 0 || year > 99) {
    setError("Ano inválido");
    throw new Error("Ano inválido");
  }

  const fullYear = 2000 + year;
  const expirationDate = new Date(fullYear, month, 0);
  const isoDate = expirationDate.toISOString().split("T")[0];

  return isoDate;
}

export function useAddCardBottomSheetViewModel() {
  const [focusedField, setFocusedField] = useState<FocusedField | null>(null);

  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const createCreditCardMutation = useCreateCreditCardMutation();

  const { close: closeBottomSheet } = useBottomSheetStore();

  const { control, watch, handleSubmit, setError } =
    useForm<CreditCardFormData>({
      defaultValues: {
        titularName: "",
        number: "",
        expirationDate: "",
        CVV: "",
      },
      resolver: zodResolver(creditCardSchema),
    });

  const handleCreateCreditCard = handleSubmit(
    async ({ number, expirationDate: rawExpirationDate, CVV }) => {
      const expirationDate = formatExpirationDateFormApi(
        rawExpirationDate,
        (message) => setError("expirationDate", { message }),
      );
      const cleanedNumber = number.replace(/\D/g, "");

      await createCreditCardMutation.mutateAsync({
        number: cleanedNumber,
        expirationDate,
        CVV: Number(CVV),
      });

      closeBottomSheet();
    },
  );

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

  function handleFieldFocus(field: FocusedField) {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
    }

    setFocusedField(field);
  }

  function handleFieldBlur() {
    blurTimeoutRef.current = setTimeout(() => {
      setFocusedField(null);
    }, 50);
  }

  const isFlipped = focusedField === "cvv";

  const watchedValues = watch();

  return {
    control,
    handleCreateCreditCard,
    cardNumberMask,
    handleFieldFocus,
    handleFieldBlur,
    closeBottomSheet,
    isFlipped,
    focusedField,
    expirationDateMask,
    cardData: {
      number: watchedValues.number,
      name: watchedValues.titularName,
      expiry: watchedValues.expirationDate,
      cvv: watchedValues.CVV,
    },
  };
}

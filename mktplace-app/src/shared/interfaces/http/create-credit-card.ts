import { CreditCard } from "@/shared/interfaces/credit-card";

export interface CreateCreditCardRequestParams {
  number: string;
  CVV: number;
  expirationDate: string;
}

export interface CreateCreditCardResponse {
  data: CreditCard;
  message: string;
  success: boolean;
}

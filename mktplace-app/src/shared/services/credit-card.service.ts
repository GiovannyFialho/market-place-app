import { marketPlaceAPIClient } from "@/shared/api/market-place";
import { CreditCard } from "@/shared/interfaces/credit-card";
import { CreateCreditCardRequestParams } from "@/shared/interfaces/http/create-credit-card";

export async function getCreditCards() {
  const { data } =
    await marketPlaceAPIClient.get<CreditCard[]>("/credit-cards");

  return data;
}

export async function createCreditCard(
  creditCardData: CreateCreditCardRequestParams,
) {
  const { data } = await marketPlaceAPIClient.post(
    "/credit-cards",
    creditCardData,
  );

  return data;
}

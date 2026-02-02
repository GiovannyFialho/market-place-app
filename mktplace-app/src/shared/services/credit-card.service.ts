import { marketPlaceAPIClient } from "@/shared/api/market-place";
import type { GetCreditCardsResponse } from "@/shared/interfaces/http/credit-card";

export async function getCreditCards() {
  const { data } =
    await marketPlaceAPIClient.get<GetCreditCardsResponse>("/credit-cards");

  return data;
}

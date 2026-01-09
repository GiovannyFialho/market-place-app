import { useAppPriceTextViewModel } from "./model";
import { AppPriceTextView } from "./view";

interface AppPriceTextParams {
  classNameCurrency?: string;
  classNameValue?: string;
  value: number;
}

export function AppPriceText({
  value,
  classNameCurrency,
  classNameValue,
}: AppPriceTextParams) {
  const viewModel = useAppPriceTextViewModel(value);

  return (
    <AppPriceTextView
      {...viewModel}
      classNameCurrency={classNameCurrency}
      classNameValue={classNameValue}
    />
  );
}

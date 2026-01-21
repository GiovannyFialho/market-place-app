import { Text, View } from "react-native";

import { useAppPriceTextViewModel } from "@/shared/components/app-price-text/model";

type AppPriceTextViewProps = ReturnType<typeof useAppPriceTextViewModel> & {
  classNameCurrency?: string;
  classNameValue?: string;
};

export function AppPriceTextView({
  classNameCurrency,
  classNameValue,
  currencySymbol,
  valueText,
}: AppPriceTextViewProps) {
  return (
    <View className="flex-row items-baseline">
      <Text className={classNameCurrency ?? "text-sm text-gray-900"}>
        {currencySymbol}
      </Text>

      <Text className={classNameValue ?? "text-2xl font-bold text-gray-900"}>
        {" "}
        {valueText}
      </Text>
    </View>
  );
}

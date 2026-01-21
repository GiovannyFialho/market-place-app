import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

import { AppInput, type AppInputProps } from "@/shared/components/app-input";

type AppInputControllerProps<T extends FieldValues> = Omit<
  AppInputProps,
  "value" | "onChangeText" | "error"
> & {
  control: Control<T>;
  name: Path<T>;
  errors?: FieldErrors<T>;
};

export function AppInputController<T extends FieldValues>({
  name,
  control,
  errors,
  ...rest
}: AppInputControllerProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <AppInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error?.message}
          isDisabled={isSubmitting || rest.isDisabled}
          {...rest}
        />
      )}
    />
  );
}

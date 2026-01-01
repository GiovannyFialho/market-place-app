import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef } from "react";

import { colors } from "../../../styles/colors";
import { useBottomSheetStore } from "../../store/bottom-sheet-store";

export function AppBottomSheet() {
  const { config, content, isOpen, close } = useBottomSheetStore();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(
    () => config?.snapPoints || ["80%", "90%"],
    [config.snapPoints]
  );

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        pressBehavior="close"
      />
    ),
    []
  );

  useEffect(() => {
    if (content && isOpen) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [content, isOpen]);

  return (
    <BottomSheet
      index={-1}
      animateOnMount
      snapPoints={snapPoints}
      enablePanDownToClose={Boolean(config.enablePanDownToClose)}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: colors.background,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
    >
      <BottomSheetScrollView>{content}</BottomSheetScrollView>
    </BottomSheet>
  );
}

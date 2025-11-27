import { ImagePickerOptions } from "expo-image-picker";

import { useModalStore } from "../store/modal-store";

import { useAppModal } from "./useAppModal";
import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";

interface UseImageParams extends ImagePickerOptions {
  callback: (uri: string | null) => void;
}

export function useImage({ callback, ...pickerOptions }: UseImageParams) {
  const modals = useAppModal();

  const { close } = useModalStore();

  const { openCamera, isLoading: cameraLoading } = useCamera(pickerOptions);
  const { openGallery, isLoading: galleryLoading } = useGallery(pickerOptions);

  const loading = Boolean(cameraLoading || galleryLoading);

  const handleCallback = (uri: string | null) => {
    close();

    callback(uri);
  };

  async function handleSelectImage() {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "images",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openGallery();

            handleCallback(imageUri);
          },
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openCamera();

            handleCallback(imageUri);
          },
        },
      ],
    });
  }

  return { handleSelectImage, loading };
}

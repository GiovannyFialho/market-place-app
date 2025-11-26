import { ImagePickerOptions } from "expo-image-picker";

import { useAppModal } from "./useAppModal";
import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";

export function useImage(pickerOptions: ImagePickerOptions = {}) {
  const modals = useAppModal();

  const { openCamera, isLoading: cameraLoading } = useCamera(pickerOptions);
  const { openGallery, isLoading: galleryLoading } = useGallery(pickerOptions);

  const loading = Boolean(cameraLoading || galleryLoading);

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

            console.log(imageUri);
          },
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPress: openCamera,
        },
      ],
    });
  }

  return { handleSelectImage, loading };
}

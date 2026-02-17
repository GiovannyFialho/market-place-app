import { useProfileViewModel } from "@/view-models/profile/profile.model";
import { ProfileView } from "@/view-models/profile/profile.view";

export default function Profile() {
  const viewModel = useProfileViewModel();

  return <ProfileView {...viewModel} />;
}

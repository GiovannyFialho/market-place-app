import { useHomeViewModel } from "../../../view-models/home/home.model";
import { Home as HomeView } from "../../../view-models/home/home.view";

export default function Home() {
  const viewModel = useHomeViewModel();

  return <HomeView {...viewModel} />;
}

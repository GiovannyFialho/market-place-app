import { useFilterModel } from "@/view-models/home/components/filter/filter.model";
import { FilterView } from "@/view-models/home/components/filter/filter.view";

export function Filter() {
  const props = useFilterModel();

  return <FilterView {...props} />;
}

import { useFilterModel } from "./model";
import { FilterView } from "./view";

export function Filter() {
  const props = useFilterModel();

  return <FilterView {...props} />;
}

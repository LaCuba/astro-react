import React from "react";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/custom-ui";
import { store } from "@/store";

export function Search() {
  const filters = store.useCarsStore((state) => state.filters);
  const setFilter = store.useCarsStore((state) => state.setFilter);

  return (
    <div className="flex flex-col gap-y-4 p-2">
      <Input
        value={filters.searchText}
        onChange={(event) =>
          setFilter({ key: "searchText", value: event.currentTarget.value })
        }
      />
      <div className="flex gap-x-4">
        <Switch
          label="Top of the top"
          checked={filters.isTopCars}
          onCheckedChange={(isChecked) =>
            setFilter({ key: "isTopCars", value: isChecked })
          }
        />
      </div>
    </div>
  );
}

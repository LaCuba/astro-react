import React from "react";
import { CarCard } from "@/components/common/CarCard";
import { Search } from "@/components/common/Search";
import { store } from "@/store";
import { helpers } from "@/helpers";

type Car = {
  id: string | number;
  image: ImageMetadata;
  brand: string;
  model: string;
  isTopCar?: boolean;
};

export type Props = {
  cars: Car[];
};

export function Cars(props: Props) {
  const filters = store.useCarsStore((state) => state.filters);

  const cars = React.useMemo(() => {
    const searchedCars = filters.searchText
      ? helpers.common.searchInArray(
          props.cars,
          ["brand", "model"],
          filters.searchText,
        )
      : props.cars;

    const withTopFilter = filters.isTopCars
      ? searchedCars.filter((car) => car.isTopCar)
      : searchedCars;

    return withTopFilter;
  }, [filters, props.cars]);

  return (
    <div className="p-12 flex flex-col gap-y-12">
      <Search />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}

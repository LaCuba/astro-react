import { CarCard } from "@/components/common/CarCard";
import { Search } from "@/components/common/Search";

type Car = {
  id: string | number;
  image: ImageMetadata;
  brand: string;
  model: string;
};

export type Props = {
  cars: Car[];
};

export function Cars(props: Props) {
  return (
    <div className="p-4 flex flex-col gap-y-12">
      <Search />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {props.cars.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}

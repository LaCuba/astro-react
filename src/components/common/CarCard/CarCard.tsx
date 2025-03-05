import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CarCardProps {
  image: ImageMetadata;
  brand: string;
  model: string;
}

export function CarCard({ image, brand, model }: CarCardProps) {
  return (
    <Card className="w-95 h-86 rounded-[10px] overflow-hidden shadow-md p-0 gap-y-2">
      <img
        src={image.src}
        alt={`${brand} ${model}`}
        className="w-full h-48 object-cover rounded-[10px]"
      />
      <CardContent className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold">{brand}</h3>
        <p className="text-gray-500">{model}</p>
        <Button className="mt-4 w-full">Подробнее</Button>
      </CardContent>
    </Card>
  );
}

import { __ } from "@/helpers";
import { CARS } from "@/server/constants";
import type { APIRoute } from "astro";

export const prerender = false;

const BRANDS_CARS = {
  BMW: "BMW",
  AUDI: "AUDI",
} as const;

type Params = { brand?: ValueOf<typeof BRANDS_CARS> };

export const GET: APIRoute<{}, Params> = async ({ params }) => {
  console.log('params.brand __________________________________', params.brand)
  const isIncludeBrand = __.includes(__.values(BRANDS_CARS), params?.brand);
  if (params.brand && !isIncludeBrand) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  switch (params.brand) {
    case BRANDS_CARS.AUDI:
      const audi = CARS.filter((car) => car.brand === BRANDS_CARS.AUDI);
      return new Response(JSON.stringify(audi), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    case BRANDS_CARS.BMW:
      const bmw = CARS.filter((car) => car.brand === BRANDS_CARS.BMW);
      return new Response(JSON.stringify(bmw), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    default:
      return new Response(JSON.stringify(CARS), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
  }
};

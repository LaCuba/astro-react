import { __ } from "@/helpers";
import { CARS } from "@/server/constants";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  // console.log("params.brand __________________________________", params.brand);

  return new Response(JSON.stringify(CARS), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

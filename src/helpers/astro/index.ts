import { getImage } from "astro:assets";
import { __ } from "..";

/**
 * Возвращает новый массив с оптимизированными изображениями
 */
export async function setAstroImagesInArray<T extends Object>(
  arr: T[],
  key: string,
  format: string = "avif",
) {
  const clonedArr = __.cloneDeep(arr);
  const promiseCars = clonedArr.map(async (item) => {
    const src = __.get(item, key);
    const image = await getImage({ src, format });
    __.set(item, key, image.src);
    return item;
  });

  return await Promise.all(promiseCars).catch((error) => {
    console.error(error);
    return [];
  });
}

export type FetchParams = {
  url: string;
  init?: RequestInit;
};

export async function handleSameRequest<T>(
  params: FetchParams,
  defaultValue: T,
): Promise<T> {
  try {
    const baseURL = import.meta.env.SITE || "http://localhost:4321";
    const response = await fetch(new URL(params.url, baseURL), params.init);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    //@ts-ignore
    console.error("Ошибка при загрузке данных:", error?.message);
    return defaultValue;
  }
}

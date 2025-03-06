import { getImage } from "astro:assets";
import { __ } from "../helpers";

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

  return await Promise.all(promiseCars)
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

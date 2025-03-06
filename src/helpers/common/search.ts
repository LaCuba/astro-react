export function searchInArray<T extends Object>(
  array: T[],
  keys: (keyof T)[],
  searchValue: string,
): T[] {
  const loweredSearchValue = searchValue.toLowerCase();

  return array.filter((item) =>
    keys.some((key) => {
      const value = item[key];
      return (
        typeof value === "string" &&
        value.toLowerCase().includes(loweredSearchValue)
      );
    }),
  );
}

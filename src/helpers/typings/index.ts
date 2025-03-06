export type SetObjectItemPayload<T extends Object> = {
  [K in keyof T]: { key: K; value: T[K] };
}[keyof T];

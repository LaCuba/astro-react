import type { helpers } from "@/helpers";
import { create } from "zustand";

export type Filters = {
  isTopCars: boolean;
  searchText: string;
};

export type State = {
  filters: Filters;
};

export type Actions = {
  setFilter: (payload: helpers.typings.SetObjectItemPayload<Filters>) => void;
  reset: () => void;
};

const initialState: State = {
  filters: {
    isTopCars: false,
    searchText: "",
  },
};

export const useCarsStore = create<State & Actions>((set) => ({
  ...initialState,
  setFilter: (payload: helpers.typings.SetObjectItemPayload<Filters>) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [payload.key]: payload.value,
      },
    })),
  reset: () => set(initialState),
}));

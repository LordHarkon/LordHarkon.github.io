import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Goddess of the Hearth CYOA
export interface GOTHStore {
  selectedOptions: SelectedOption[];
  selectionLimit: SelectionLimit[];
  selectedItemOptions: SelectedItemOption[];
}

export interface GOTHStoreActions {
  setSelectedOptions: (options: SelectedOption[]) => void;
  setSelectionLimit: (selectionLimit: SelectionLimit[]) => void;
  setSelectionLimitByOne: (id: string, limit: number) => void;
  getSelectionLimit: (id: string, defaultLimit: number) => number;
  addSelectionLimit: (id: string, qty: number) => void;
  reduceSelectionLimit: (id: string, qty: number) => void;
  setSelectedItemOptions: (selectedItemOptions: SelectedItemOption[]) => void;
}

export interface SelectedOption {
  category: string;
  id: string;
  count?: number;
}

export interface SelectionLimit {
  id: string;
  limit: number;
}

export interface SelectedItemOption {
  item: string;
  id: string;
}

export const useGOTHStore = create<GOTHStore & GOTHStoreActions>()(
  devtools(
    persist(
      (set, get) => ({
        selectedOptions: [],
        selectionLimit: [],
        selectedItemOptions: [],
        setSelectedOptions: (selectedOptions: SelectedOption[]) => set({ selectedOptions }),
        getSelectionLimit: (id: string, defaultLimit: number) => {
          const limit = get().selectionLimit.find((limit) => limit.id === id);
          return limit ? limit.limit : defaultLimit;
        },
        setSelectionLimit: (selectionLimit: SelectionLimit[]) => set({ selectionLimit }),
        setSelectionLimitByOne: (id: string, limit: number) =>
          set((state) => ({
            selectionLimit: [
              ...state.selectionLimit.filter((limit) => limit.id !== id),
              {
                id,
                limit,
              },
            ],
          })),
        addSelectionLimit: (id: string, qty: number) =>
          set((state) => ({
            selectionLimit: [
              ...state.selectionLimit.map((limit) => {
                if (limit.id === id) {
                  return {
                    ...limit,
                    limit: limit.limit + qty,
                  };
                }
                return limit;
              }),
            ],
          })),
        reduceSelectionLimit: (id: string, qty: number) =>
          set((state) => ({
            selectionLimit: [
              ...(state.selectionLimit
                .map((limit) => {
                  if (limit.id === id) {
                    if (limit.limit - qty < 0) return false;
                    return {
                      ...limit,
                      limit: limit.limit - qty,
                    };
                  }
                  return limit;
                })
                .filter(Boolean) as SelectionLimit[]),
            ],
          })),
        setSelectedItemOptions: (selectedItemOptions: SelectedItemOption[]) => set({ selectedItemOptions }),
      }),
      { name: "GOTHStore" },
    ),
    { enabled: true, name: "GOTHStore" },
  ),
);

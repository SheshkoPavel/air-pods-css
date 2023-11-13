import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppState {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    // persist( //to save state after browser reload
      (set) => ({
        selectedColor: "blue",
        setSelectedColor: (color) => set((state) => ({ selectedColor: color })),
      }),
    //   { name: "appStore", version: 1 },
    // ),
  ),
);

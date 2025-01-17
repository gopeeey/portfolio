import { create } from "zustand";

interface AnimationReadyState {
  heroReady: boolean;
  heroIsReady: () => void;
}

export const useAnimationReadyStore = create<AnimationReadyState>((set) => ({
  heroReady: false,
  heroIsReady: () => set({ heroReady: true }),
}));

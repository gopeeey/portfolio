import { create } from "zustand";

interface AnimationReadyState {
  heroReady: boolean;
  setHeroReady: () => void;
}

export const useAnimationReadyStore = create<AnimationReadyState>((set) => ({
  heroReady: false,
  setHeroReady: () => set({ heroReady: true }),
}));

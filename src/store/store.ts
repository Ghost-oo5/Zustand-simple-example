import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string;
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
  removeHabit: (id: string) => void;
  toggleHabit: (id: string, date: string) => void;
}

const useHabitStore = create<HabitState>()(
  devtools((set, get) => ({
    habits: [],
    addHabit: (name, frequency) =>
      set((state) => {
        return {
          habits: [
            ...state.habits,
            {
              id: Date().toString(),
              name,
              frequency,
              completedDates: [],
              createdAt: new Date().toISOString(),
            },
          ],
        };
      }),
    removeHabit: (id) =>
      set((state) => ({
        habits: state.habits.filter((item) => item.id !== id),
      })),
    toggleHabit: (id, date) =>
      set((state) => ({
        habits: state.habits.map((habit) =>
          habit.id === id
            ? {
                ...habit,
                completedDates: habit.completedDates.includes(date)
                  ? habit.completedDates.filter((c) => c !== date)
                  : [...habit.completedDates, date],
              }
            : habit
        ),
      })),
  }))
);
export default useHabitStore;

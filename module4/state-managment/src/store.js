import { create } from 'zustand'

export const useStore = create((set) => ({
    todos: [
        { id: 1, text: "Wake up" },
        { id: 2, text: "Shower" }
    ],
    setTodos: (newTodos) => set({ todos: newTodos })
}))

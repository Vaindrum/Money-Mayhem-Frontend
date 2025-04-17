import { create } from 'zustand'

interface DiceState {
  dice: [number, number] | null
  rollDice: () => Promise<void>
}

export const useDiceStore = create<DiceState>((set) => ({
  dice: null,
  rollDice: async () => {
    const res = await fetch('/api/rollDice', { method: 'POST' })
    const data = await res.json()
    set({ dice: data.dice })
  },
}))

'use client'
import { useDiceStore } from "@/stores/diceStore"

export default function DiceRoller() {
  const { dice, rollDice } = useDiceStore()

  return (
    <div className="p-4 text-center">
      <button onClick={rollDice} className="bg-purple-600 cursor-pointer text-white px-4 py-2 rounded">
        Roll Dice
      </button>

      {dice && (
        <p className="mt-4 text-xl">
          🎲 You rolled: {dice[0]} and {dice[1]}
        </p>
      )}
    </div>
  )
}

import { rest } from 'msw'

export const handlers = [
  rest.post('/api/rollDice', (req, res, ctx) => {
    const dice1 = Math.ceil(Math.random() * 6)
    const dice2 = Math.ceil(Math.random() * 6)
    return res(ctx.status(200), ctx.json({ dice: [dice1, dice2] }))
  }),
]
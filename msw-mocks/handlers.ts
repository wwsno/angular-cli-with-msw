import { rest } from 'msw';

export const handlers = [
  rest.get('/meow', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body('meow')
    );
  }),
];

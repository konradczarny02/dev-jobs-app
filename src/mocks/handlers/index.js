import { rest } from 'msw';
import { jobs } from 'mocks/data/jobs';

export const handlers = [
  rest.get('/jobs', (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        jobs,
      })
    );
  }),
];

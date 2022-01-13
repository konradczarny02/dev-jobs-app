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
  rest.get('/jobs/:id', (req, res, context) => {
    if (req.params.id) {
      const matchingJob = jobs.find((job) => job.id === req.params.id);
      if (!matchingJob) {
        return res(context.status(404), context.json({ error: 'No matching job' }));
      }
      return res(context.status(200), context.json({ jobs: matchingJob }));
    }
  }),
];

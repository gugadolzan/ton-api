import { NextFunction, Request, Response } from 'express';

/**
 * Handle unexpected errors
 */
export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);

  res.status(500).json({ message: 'Internal server error' });
};

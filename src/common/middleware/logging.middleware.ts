import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    const { method, originalUrl } = req;

    // Log the request
    console.log(`Incoming ${method} ${originalUrl}`);

    // Capture errors
    res.on('error', (error) => {
      console.error(`Error in ${method} ${originalUrl}:`, error);
    });

    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`${method} ${originalUrl} ${res.statusCode} ${duration}ms`);
    });

    next();
  }
}
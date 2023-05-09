import { Request, Response, NextFunction } from 'express';

import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
const validateToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token: string;
    const authHeader =
      req.headers.authorization || (req.headers.Authorization as string);
    if (authHeader && authHeader.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decodedData: any) => {
          if (err) {
            res.status(401);
            throw new Error('User is not authorized');
          }
          req['user'] = decodedData.user;
          next();
        }
      );

      if (!token) {
        res.status(401);
        throw new Error('User is not authorized or token not provided');
      }
    }
  }
);

export default validateToken;

import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
    iat: number;
    expt: number;
    sub: string;
}

function ensureAuthentication(request: Request, response: Response, next: NextFunction): void{
    const authHeader = request.headers.authorization;

    if (!authHeader){
        throw new Error('JWT does not exists');
    }

    const [, token] = authHeader.split(' ');

    const { secret, expiresIn } = authConfig.webToken;

    try {
        const decoded = verify(token, secret);

        console.log(decoded);

        return next();
    } catch {
        throw new Error('JWT is not valid');
    }   
}

export default ensureAuthentication;
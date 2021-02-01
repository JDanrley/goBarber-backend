import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

function ensureAuthentication(request: Request, response: Response, next: NextFunction): void{
    const webToken = request.headers.authorization;

    if (!webToken){
        throw new Error('JWT does not exists');
    }

    const verifiedToken = verify(webToken, authConfig.webToken.secret);

    
    
}
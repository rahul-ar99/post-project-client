import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY; // Use an environment variable for your secret key

export function middleware(request) {
    const { cookies } = request;
    const token = cookies.get('auth_token');

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // try {
    //     // Verify the token
    //     const decoded = jwt.verify(token, SECRET_KEY);
    //     // Optionally, you can add additional checks on the decoded token if needed
    //     console.log('Decoded JWT:', decoded);
    // } catch (err) {
    //     console.error('JWT verification failed:', err);
    //     // Token is invalid or expired
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ['/mainpage', '/create','/'],
};

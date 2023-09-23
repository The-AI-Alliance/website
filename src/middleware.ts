import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const [AUTH_USER, AUTH_PASS] = (process.env.HTTP_BASIC_AUTH || ':').split(':');

const isAuthenticated = (req: NextRequest) => {
  if (!AUTH_USER) return true;

  const authHeader =
    req.headers.get('authorization') || req.headers.get('Authorization');

  if (!authHeader) {
    return false;
  }

  const auth = Buffer.from(authHeader.split(' ')[1], 'base64')
    .toString()
    .split(':');
  const user = auth[0];
  const pass = auth[1];

  if (user == AUTH_USER && pass == AUTH_PASS) {
    return true;
  } else {
    return false;
  }
};

export function middleware(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};

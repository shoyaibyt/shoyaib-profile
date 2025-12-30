import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Allowed Domain List
  const allowedDomains = ['localhost:3000', 'shoyaib-profile.vercel.app', 'shoyaib.pages.dev'];

  const isAllowed = allowedDomains.some(domain => hostname.includes(domain));

  if (!isAllowed) {
    return new NextResponse('Access Denied: Unauthorized Deployment', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};

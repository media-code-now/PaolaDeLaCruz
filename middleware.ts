import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user is trying to access admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for admin token cookie
    const adminToken = request.cookies.get('admin_token');
    
    if (!adminToken) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

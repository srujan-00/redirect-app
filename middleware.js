import { NextResponse, NextRequest } from 'next/server'






// This function can be marked `async` if using `await` inside
export function middleware(req) {
    return NextResponse.redirect(new URL('https://enewsreports.in' + req.nextUrl.pathname, req.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*'
}
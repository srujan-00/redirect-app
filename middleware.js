import { NextResponse, NextRequest } from 'next/server'


let req = NextRequest;
let res = NextResponse;

// This function can be marked `async` if using `await` inside
export function middleware() {
    return res.redirect(new URL('https://enewsreports.in/', req.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*'
}
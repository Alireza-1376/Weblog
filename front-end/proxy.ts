import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const cookie = request.cookies.get("LoginToken")?.value;
    if (!cookie && request.nextUrl.pathname == "/auth/profile") {
        return NextResponse.redirect(new URL('/', request.url))
    }
    if (cookie && request.nextUrl.pathname == "/auth/login") {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next();

}

export const config = {
    matcher: ["/auth/login", "/auth/profile"],
}
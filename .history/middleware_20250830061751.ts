import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders : Record<string, string> = {};
  request.headers.forEach((value, key) => { negotiatorHeaders[key] = value; });

  //ts-ignore locales are readonly
  const locales: string[] = [...i18n.locales];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
    )

    //Redirect if there is no locale in the pathname
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url
            )
        );  
    }
}

export const config = {
    matcher: [
        // Match all paths except for the ones starting with _next, api, and static
        "/((?!_next|api|static|favicon.ico|robots.txt).*)", 
    ]
};
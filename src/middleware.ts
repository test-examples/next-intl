import createMiddleware from 'next-intl/middleware';

export const locales = ['en', 'ru'];

export default createMiddleware({
    defaultLocale: 'en',
    locales
});

export const config = {
    matcher: [
        '/',
        '/(en|ru)/:path*'
    ]
};

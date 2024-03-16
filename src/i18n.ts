// 'use client';

import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'ru'];

const config = (async ({locale}: any) => {
    if (!locales.includes(locale as any)) {
        notFound();
    }

    console.log('locale', locale);

    return {
        messages: (
            await (locale === 'en'
                ? // When using Turbopack, this will enable HMR for `en`
                import('../messages/en.json')
                : import(`../messages/${locale}.json`))
        ).default
    };
});

export default getRequestConfig(config);

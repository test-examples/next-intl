import React from 'react';
import {NextIntlClientProvider, useMessages} from 'next-intl';

// import {unstable_setRequestLocale} from 'next-intl/server';
import './globals.css';

type Props = React.PropsWithChildren & {
    params: {
        locale: string
    };
};
const RootLayout: React.FunctionComponent<Props> = ({
    children,
    params: {locale}
}) => {
    const messages = useMessages();

    // unstable_setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export const dynamic = 'force-static';
// export const dynamicParams = true;

export default RootLayout;

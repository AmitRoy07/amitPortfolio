import 'theme/global/index.scss';

import type { AppProps } from 'next/app';

import { LayOut } from 'components/layout/LayOut';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LayOut>
            <Component {...pageProps} />
        </LayOut>
    );
}

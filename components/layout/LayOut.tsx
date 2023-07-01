import global from 'theme/global/Global.module.scss';
import styles from './LayOut.module.scss';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import About from 'components/about/About';
import { ReactNode } from 'react';

interface LayoutInterface {
    children: ReactNode;
}

export const LayOut = ({ children }: LayoutInterface) => {
    return (
        <>
            <Header />
            <main className={styles.main_body}>{children}</main>
            <Footer />
        </>
    );
};

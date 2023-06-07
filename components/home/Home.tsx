import global from 'theme/global/Global.module.scss';
import styles from './Home.module.scss';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import About from 'components/about/About';

export const Home = () => {
    return (
        <>
            <div className={styles.hero_sec}>hero</div>
            <About />
            <Footer />
            {/* <Header /> */}
        </>
    );
};

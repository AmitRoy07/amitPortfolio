import React from 'react';
import global from 'theme/global/Global.module.scss';
import styles from './Header.module.scss';
import Link from 'next/link';
import UTILITY_CONSTANT from 'constants/image.constant';

const NavMenu = [
    {
        ID: 0,
        name: 'Work',
        url: '',
    },
    {
        ID: 1,
        name: 'About',
        url: '',
    },
    {
        ID: 2,
        name: 'Contact',
        url: '',
    },
];

const Header = () => {
    return (
        <div className={`${styles.header_sec} ${global.padding_inline}`}>
            <div className={`${styles.custom_container} ${global.container}`}>
                <div className={styles.inner_header}>
                    <div className={styles.logo_container}>
                        <Link href={'#'} className={styles.logo}>
                            <img src={UTILITY_CONSTANT.IMAGE.COMMON.WHITE_LOGO} alt="logo" />
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        <div className={styles.nav_list}>
                            {NavMenu.map((item) => (
                                <Link key={item.ID} className={`${styles.nav_item} ${global.body}`} href={'#'}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;

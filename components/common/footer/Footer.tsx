import React from 'react';
import global from 'theme/global/Global.module.scss';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { log } from 'console';

const SocialIconList = [
    {
        ID: 0,
        name: 'FaceBook',
        socialIcon: <FaFacebookSquare />,
        url: '',
    },
    {
        ID: 1,
        name: 'Email',
        socialIcon: <IoMdMail />,
        url: '',
    },
    {
        ID: 2,
        name: 'Twitter',
        socialIcon: <BsTwitter />,
        url: '',
    },
    {
        ID: 3,
        name: 'Instagram',
        socialIcon: <AiFillInstagram />,
        url: '',
    },
    {
        ID: 4,
        name: 'Linkedin',
        socialIcon: <BsLinkedin />,
        url: '',
    },
];

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className={`${styles.footer_sec} ${global.padding_inline}`}>
            <div className={`${styles.custom_container} ${global.container}`}>
                <div className={`${styles.inner_footer}`}>
                    <div className={styles.social_icon}>
                        <h4 className={`${styles.title} ${global.body2}`}>©{year} Amit Roy. All Rights Reserved.</h4>
                        <div className={styles.icon_list}>
                            {SocialIconList.map((item) => (
                                <Link className={`${styles.icon} ${styles[item.name]}`} href={item.url} key={item.ID}>
                                    {item.socialIcon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

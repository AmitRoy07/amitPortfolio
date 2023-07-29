import React from 'react';
import global from 'theme/global/Global.module.scss';
import styles from './Intro.module.scss';
import UTILITY_CONSTANT from 'constants/image.constant';

const Intro = () => {
    return (
        <div className={`${styles.intro_sec} ${global.padding_inline}`}>
            <div className={`${styles.custom_container} ${global.container}`}>
                <div className={styles.inner_intro_sec}>
                    <div className={styles.profile_img}>
                        <img src={UTILITY_CONSTANT.IMAGE.INTRO.PROFILE_IMAGE} alt="profile_Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;

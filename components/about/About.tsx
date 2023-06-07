import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import global from 'theme/global/Global.module.scss';
import styles from './About.module.scss';

const About = () => {
    const triggerRef = useRef(null);
    const sectionRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: '-300vw',
                ease: 'none',
                duration: 3,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: '2000 top',
                    scrub: 0.6,
                    pin: true,
                },
            },
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <div className={styles.about_sec}>
            <div ref={triggerRef}>
                <div ref={sectionRef} className={styles.inner_sec}>
                    <section className={styles.container_width}>
                        <h1>1</h1>
                    </section>
                    <section className={styles.container_width}>
                        <h1>2</h1>
                    </section>
                    <section className={styles.container_width}>
                        <h1>3</h1>
                    </section>
                    <section className={styles.container_width}>
                        <h1>4</h1>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;

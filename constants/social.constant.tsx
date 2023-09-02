import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

export const SocialIconList = [
    {
        ID: 0,
        name: 'FaceBook',
        socialIcon: <FaFacebookSquare />,
        url: 'https://www.facebook.com/profile.php?id=100006813399279',
        target: '_blank',
    },
    {
        ID: 1,
        name: 'Email',
        socialIcon: <IoMdMail />,
        url: 'mailto:amitroy2383@gmail.com',
        target: '_blank',
    },
    {
        ID: 2,
        name: 'Twitter',
        socialIcon: <BsTwitter />,
        url: 'https://twitter.com/home',
        target: '_blank',
    },
    {
        ID: 3,
        name: 'Instagram',
        socialIcon: <AiFillInstagram />,
        url: 'https://www.instagram.com/the_anthem_of_the_heart_/',
        target: '_blank',
    },
    {
        ID: 4,
        name: 'Linkedin',
        socialIcon: <BsLinkedin />,
        url: 'https://www.linkedin.com/in/amit-roy-92585a1a9/',
        target: '_blank',
    },
];

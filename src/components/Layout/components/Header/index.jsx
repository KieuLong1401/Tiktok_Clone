import styles from './Header.module.scss'
import 'tippy.js/dist/tippy.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faGlobe,
    faUser,
    faFlag,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons'

import Tippy from '@tippyjs/react'
import Search from '../Search'
import Button from '../../../Button'
import Menu from '../../../Popper/Menu'
import Icon from '../../../Icon'
import Image from '../../../Image'

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        child: {
            headerTitle: 'Language',
            data: [
                {
                    type: 'lang',
                    title: 'English',
                    code: 'en',
                },
                {
                    type: 'lang',
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]

const USER_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: './@user',
    },
    {
        icon: <FontAwesomeIcon icon={faFlag} />,
        title: 'Favorites',
        to: './@user',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: './coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: './setting',
    },
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        child: {
            headerTitle: 'Language',
            data: [
                {
                    type: 'lang',
                    title: 'English',
                    code: 'en',
                },
                {
                    type: 'lang',
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        compartment: true,
    },
]

const user = true

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <a href='/'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='118'
                            height='42'
                            fill='currentColor'
                            alt='TikTok, 틱톡'>
                            <path
                                fill='#25F4EE'
                                d='M9.875 16.842v-1.119A8.836 8.836 0 0 0 8.7 15.64c-4.797-.006-8.7 3.9-8.7 8.707a8.706 8.706 0 0 0 3.718 7.135A8.675 8.675 0 0 1 1.38 25.55c0-4.737 3.794-8.598 8.495-8.707Z'></path>
                            <path
                                fill='#25F4EE'
                                d='M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a6.78 6.78 0 0 1-.11-1.202h-4.726l-.006 18.969a3.978 3.978 0 0 1-3.967 3.829 3.93 3.93 0 0 1-1.846-.46 3.949 3.949 0 0 0 3.22 1.662Zm13.906-16.36v-1.055a6.506 6.506 0 0 1-3.583-1.068 6.571 6.571 0 0 0 3.583 2.123Z'></path>
                            <path
                                fill='#FE2C55'
                                d='M20.409 11.043a6.54 6.54 0 0 1-1.616-4.315h-1.265a6.557 6.557 0 0 0 2.88 4.316ZM8.706 20.365a3.98 3.98 0 0 0-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.936 3.936 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.409 0 .805.07 1.175.185v-4.833a8.837 8.837 0 0 0-1.175-.083c-.07 0-.134.006-.204.006v3.708a3.999 3.999 0 0 0-1.176-.185Z'></path>
                            <path
                                fill='#FE2C55'
                                d='M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.621c0 4.802-3.902 8.714-8.706 8.714a8.669 8.669 0 0 1-4.988-1.579 8.69 8.69 0 0 0 6.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73c-.48 0-.94-.052-1.38-.148Z'></path>
                            <path
                                fill='black'
                                d='M17.413 24.348v-9.622a11.251 11.251 0 0 0 6.58 2.116v-3.676a6.571 6.571 0 0 1-3.584-2.123 6.61 6.61 0 0 1-2.888-4.315H14.06l-.006 18.968a3.978 3.978 0 0 1-3.967 3.83A3.99 3.99 0 0 1 6.86 27.87a3.991 3.991 0 0 1-2.133-3.523A3.98 3.98 0 0 1 8.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.669 8.669 0 0 0 4.988 1.58c4.798 0 8.707-3.913 8.707-8.714Zm12.635-11.169h14.774l-1.354 4.232h-3.832v15.644h-4.778V17.41l-4.804.006-.006-4.238Zm38.984 0h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006-.006-4.238ZM45.73 19.502h4.733v13.553h-4.708l-.026-13.553Zm6.617-6.374h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128h.006Zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734V13.128Zm-54.397 4.826a2.384 2.384 0 0 0 2.382-2.384 2.384 2.384 0 1 0-2.382 2.384Z'></path>
                            <path
                                fill='#25F4EE'
                                d='M83.544 24.942a8.112 8.112 0 0 1 7.474-8.087 8.748 8.748 0 0 0-.709-.026c-4.478 0-8.106 3.631-8.106 8.113 0 4.482 3.628 8.113 8.106 8.113.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087Z'></path>
                            <path
                                fill='#FE2C55'
                                d='M92.858 16.83c-.217 0-.505.012-.716.025a8.111 8.111 0 0 1 7.468 8.087 8.112 8.112 0 0 1-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113Z'></path>
                            <path
                                fill='black'
                                d='M91.58 28.887a3.94 3.94 0 0 1-3.94-3.945 3.94 3.94 0 1 1 7.882 0c0 2.18-1.77 3.945-3.942 3.945Zm0-12.058c-4.477 0-8.106 3.631-8.106 8.113 0 4.482 3.629 8.113 8.106 8.113 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113Z'></path>
                        </svg>
                    </a>
                </div>

                <Search />

                <div className={styles.buttonContainer}>
                    <Button
                        text
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                        to={'/creator-center/upload'}>
                        Upload
                    </Button>
                    {user ? (
                        <>
                            <Tippy content='Messages'>
                                <Icon
                                    child={
                                        <svg
                                            width='26'
                                            height='26'
                                            viewBox='0 0 48 48'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z'></path>
                                        </svg>
                                    }
                                    triggered={
                                        <svg
                                            width='26'
                                            height='26'
                                            viewBox='0 0 48 48'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M45.7321 7.00001C45.3748 6.3812 44.7146 6 44 6H4.00004C3.20826 6 2.49103 6.4671 2.17085 7.19125C1.85068 7.9154 1.98785 8.76026 2.52068 9.34592L12.9607 20.8209C13.5137 21.4288 14.3824 21.6365 15.1506 21.3445L29.65 15.8336C29.8188 15.7694 29.8953 15.796 29.9287 15.8092C29.9872 15.8325 30.0709 15.8928 30.1366 16.0041C30.2023 16.1154 30.2147 16.2179 30.2068 16.2802C30.2023 16.3159 30.1885 16.3958 30.0509 16.5125L18.1464 26.6098C17.5329 27.1301 17.2908 27.9674 17.5321 28.7348L22.0921 43.2398C22.33 43.9967 22.9928 44.5413 23.7815 44.628C24.5701 44.7147 25.3354 44.3271 25.7321 43.64L45.7321 9.00002C46.0894 8.38122 46.0894 7.61882 45.7321 7.00001Z'></path>
                                        </svg>
                                    }
                                    trigAt='/following'
                                    key='messageIcon'
                                    className={styles.userBtn}
                                />
                            </Tippy>
                            <Tippy content='Inbox'>
                                <Icon
                                    child={
                                        <svg
                                            width='32'
                                            height='32'
                                            viewBox='0 0 32 32'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z'></path>
                                        </svg>
                                    }
                                    triggered={
                                        <svg
                                            width='32'
                                            height='32'
                                            viewBox='0 0 48 48'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M11.4977 9C10.1195 9 9.0013 10.1153 8.99767 11.4934L8.94239 32.4934C8.93875 33.8767 10.0591 35 11.4424 35H18.7895L22.0656 39.004C23.0659 40.2265 24.9352 40.2264 25.9354 39.0039L29.2111 35H36.5587C37.942 35 39.0623 33.8767 39.0587 32.4934L39.0029 11.4934C38.9993 10.1152 37.8811 9 36.5029 9H11.4977ZM29 21H19C18.4477 21 18 21.4477 18 22V23C18 23.5523 18.4477 24 19 24H29C29.5523 24 30 23.5523 30 23V22C30 21.4477 29.5523 21 29 21Z'></path>
                                        </svg>
                                    }
                                    trigOnClick
                                    className={styles.userBtn}
                                />
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={user ? USER_MENU_ITEMS : MENU_ITEMS}>
                        {user ? (
                            <Image
                                className={styles.userAvatar}
                                src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a70040726c59e998be0bc29965982fde~c5_300x300.webp?x-expires=1694404800&x-signature=n%2FBQp1LXVg%2FlGKLe4ydmra073wM%3D'
                                alt='avatar'
                            />
                        ) : (
                            <button className={styles.menuWrapper}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className='icon'></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header

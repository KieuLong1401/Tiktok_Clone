import styles from './Video.module.scss'

import Icon from '../Icon/Icon'
import Menu from '../Popper/Menu/Menu'
import Image from '../Image'
import Tippy from '@tippyjs/react/headless'
import Button from '../Button'
import { Slider } from '../Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFlag,
    faPlay,
    faMusic,
    faPause,
    faEllipsis,
    faVolumeHigh,
    faVolumeMute,
    faHeartBroken,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

const VIDEO_MORE_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faHeartBroken} />,
        title: 'Not interested',
    },
    {
        icon: <FontAwesomeIcon icon={faFlag} />,
        title: 'Report',
    },
]

function Video({ src }) {
    const [isPlay, setIsPlay] = useState(true)
    const [volume, setVolume] = useState(0)
    const [isMuted, setIsMuted] = useState(true)
    const [videoCurrentTime, setVideoCurrentTime] = useState(0)
    const videoRef = useRef('')
    const videoTimerIdRef = useRef('')

    clearInterval(videoTimerIdRef.current)
    videoTimerIdRef.current = setInterval(() => {
        setVideoCurrentTime(videoRef.current.currentTime)
    }, 250)

    useEffect(() => {
        if (videoRef.current) {
            if (isPlay) {
                videoRef.current.play()
            } else if (!isPlay) {
                videoRef.current.pause()
            }
        }
    }, [isPlay])

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume
            if (videoRef.current.volume == 0) {
                setIsMuted(true)
            } else {
                setIsMuted(false)
            }
        }
    }, [volume])

    useEffect(() => {
        if (isMuted) {
            setVolume(0)
        } else if (!isMuted) {
            setVolume(0.5)
        }
    }, [isMuted])

    return (
        <div className={styles.wrapper}>
            <a href='#'>
                <Image src='' className={styles.avatar}></Image>
            </a>
            <div className={styles.videoContainer}>
                <div className={styles.videoInfo}>
                    <a href='#' className={styles.author}>
                        <h3 className={styles.authorNickName}>AnhLongDeeptroai</h3>
                        <h4 className={styles.authorName}>Kieu Ngoc Long</h4>
                    </a>
                    <div className={styles.videoTitleWrapper}>
                        <span className={styles.videoTitle}>videoTitle</span>
                        <a href='E' className={styles.hashtags}>
                            #hashtag
                        </a>
                    </div>
                    <div className={styles.music}>
                        <FontAwesomeIcon icon={faMusic} />
                        <div className={styles.musicInfo}>
                            <p className={styles.musicName}>
                                Music Name<span className={styles.singer}> - Singer</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.videoWrapper}>
                    {src && (
                        <div className={styles.video}>
                            <video
                                playsInline=''
                                preload='auto'
                                muted='muted'
                                autoPlay={true}
                                crossOrigin='use-credentials'
                                src={src}
                                ref={videoRef}
                                loop></video>
                            <div>
                                <Menu
                                    items={VIDEO_MORE_MENU_ITEMS}
                                    placement={'right'}
                                    className={styles.moreIconPopper}>
                                    <FontAwesomeIcon
                                        icon={faEllipsis}
                                        className={styles.moreIcon + ' ' + styles.videoController}
                                    />
                                </Menu>
                            </div>
                            <Icon
                                className={styles.videoPlayerIcon + ' ' + styles.videoController}
                                child={<FontAwesomeIcon icon={faPause} />}
                                triggered={<FontAwesomeIcon icon={faPlay} />}
                                trigOnClick
                                onClick={() => {
                                    setIsPlay((isPlay) => !isPlay)
                                }}
                            />
                            <div className={styles.seekBarContainer + ' ' + styles.videoController}>
                                <Slider
                                    className={styles.seekBar}
                                    fillColor='#ffffff'
                                    emptyColor='rgb(0 0 0 / 25%)'
                                    min={0}
                                    max={videoRef.current.duration}
                                    value={videoCurrentTime}
                                    onChange={(e) => {
                                        clearInterval(videoCurrentTime.current)
                                        videoRef.current.currentTime = e.target.value
                                        videoTimerIdRef.current = setInterval(() => {
                                            setVideoCurrentTime(videoRef.current.currentTime)
                                        }, 250)
                                    }}
                                    step='0.25'
                                />
                                <div className={styles.seekBarTimer}>00:36/01:50</div>
                            </div>
                            <Tippy
                                interactive
                                hideOnClick={false}
                                render={(attrs) => (
                                    <div className={styles.volumeSlider} {...attrs}>
                                        <Slider
                                            fillColor='#ffffff'
                                            emptyColor='rgb(0 0 0 / 25%)'
                                            min={0}
                                            max={1}
                                            value={volume}
                                            step={0.1}
                                            onChange={(e) => setVolume(e.target.value)}
                                        />
                                    </div>
                                )}>
                                <Icon
                                    className={styles.volumeIcon + ' ' + styles.videoController}
                                    child={<FontAwesomeIcon icon={faVolumeHigh} />}
                                    triggered={<FontAwesomeIcon icon={faVolumeMute} />}
                                    isTriggering={isMuted}
                                    onClick={() => setIsMuted(!isMuted)}
                                />
                            </Tippy>
                        </div>
                    )}
                    <div className={styles.actionContainer}></div>
                </div>
            </div>
            <Button className={styles.followBtn} reverse small>
                Follow
            </Button>
        </div>
    )
}

export default Video

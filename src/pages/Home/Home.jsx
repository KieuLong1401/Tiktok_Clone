import styles from './Home.module.scss'

import Video from '../../components/Video/Video'

function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.columnWrapper}>
                <Video src={'/testVideo.mp4'}></Video>
            </div>
        </div>
    )
}

export default Home

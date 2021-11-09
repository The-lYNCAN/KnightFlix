import styles from '../../../styles/index/hero.module.scss'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
    return (
        <div className={styles.con}>
            <div className={styles.backBlur}>
            </div>
            <div className={styles.blur}>
                {/* <div className={styles.thumbNail}>

                </div> */}
                <div className={styles.title}>
                    <h1>Iron Man</h1>
                    <div>
                        <button>Watch Now</button>
                        <button className={styles.shareBtn}><FontAwesomeIcon icon={faShare} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
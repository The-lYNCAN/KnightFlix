import styles from '../../../styles/index/ttrends.module.scss'
import Hero from './hero'
import Row from './row'

const TodaysTrends = () => {
    return (
        <div className={styles.con}>
            <Hero />
            <Row />
        </div>
    )
}

export default TodaysTrends
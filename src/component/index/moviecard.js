import styles from '../../../styles/index/moviecard.module.scss'

const MovieCard = () => {
    return (
        <div className={styles.con}>
            <img className={styles.cardImg} src="/thumbnails/ironman2.jpg" />
        </div>
    )
}

export default MovieCard
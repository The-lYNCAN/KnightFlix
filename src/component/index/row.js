import MovieCard from "./moviecard";
import styles from '../../../styles/index/row.module.scss'

const Row = () => {
    return(
        <div className={styles.super}>
            <div className={styles.con}>
                <div className={styles.slider}>
                    {/* <div className={styles.slide}> */}
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />

                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Row
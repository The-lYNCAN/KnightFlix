import MovieCard from "./moviecard";
import styles from '../../../styles/index/row.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Row = () => {

    useEffect(() => {
        document.getElementById(styles.arrow).onclick = () => {
            console.log("arrow clicked");
            // window.scrollX(25)
            // document.getElementsByClassName(styles.slider)[0].scrollTo(200, 0)
        }
        document.getElementById(styles.arrowright).onclick = () => {
            console.log("arrow clicked");
            // window.scrollX(-25)
        }
    }, [])


    return(
        <div className={styles.super}>
            <h1>Movie</h1>
            <div className={styles.con}>
                <div className={styles.slider}>
                    <div className={styles.arrowRight}>
                        <FontAwesomeIcon id={styles.arrowright} className={styles.arrow} icon={faArrowRight} />
                    </div>
                    <div className={styles.arrowLeft}>
                        <FontAwesomeIcon id={styles.arrow} icon={faArrowLeft} />
                    </div>
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
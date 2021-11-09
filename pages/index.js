import NavBar from '../src/component/navbar'
import styles from '../styles/Home.module.css'
import TodaysTrends from '../src/component/index/todaystrend'
import Suggestions from '../src/component/index/suggestion'

export default function Home() {
  return (
    <div className={styles.con}>  
      <NavBar />
      <div className={styles.uppers}>
        <div className={styles.navbar}></div>
        <div className={styles.com}>
          <TodaysTrends />
          <Suggestions />
        </div>

      </div>
    </div>
  )
}

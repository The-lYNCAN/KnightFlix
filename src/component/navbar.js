import styles from '../../styles/navbar.module.scss'
import { faShoppingBag,faCogs, faHeart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [selected, setSelected] = useState("one")
    useEffect(() => {
        const items = document.getElementsByClassName(styles.item)
        for(var i=0;i<5;i++){
            items[i].addEventListener("click", (e) => {
                // console.log("one");
                for(var j=0;j<5;j++){
                    // console.log(j);
                    items[j].classList.remove(styles.active)
                    // items[j].style.color = "rgb(78, 78, 78)"
                }
                for(var k=0;5>k;k++){
                    document.getElementsByClassName(styles.icon)[k].style.color = "rgb(78, 78, 78)"
                }
                items[i].classList.add(styles.active)
                document.getElementsByClassName(styles.icon)[i].classList.remove(styles.white)
                document.getElementsByClassName(styles.icon)[i].classList.add(styles.white)
                document.getElementsByClassName(styles.icon)[i].style.color = "white"
            })
            // console.log(items[i]);
        }
    }, [])
    return (
        <div className={styles.con}>
            <div className={styles.navContainer}>
                <div className={styles.mark}>
                    <h1>K</h1>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        {/* <img src="./navbar/tvset.png" /> */}
                        <FontAwesomeIcon className={styles.icon} icon={faShoppingBag} />
                        {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1</style></defs><title>old-tv-outline</title><path class="cls-1" d="M448,89.6H303.66l40.26-70.45a12.8,12.8,0,0,0-22.23-12.7L274.17,89.6H237.83L190.31,6.45a12.8,12.8,0,0,0-22.23,12.7L208.34,89.6H64a64.19,64.19,0,0,0-64,64v256a64.19,64.19,0,0,0,64,64H97.1L80.55,490.15a12.8,12.8,0,1,0,18.1,18.1L133.3,473.6H378.7l34.65,34.65a12.8,12.8,0,1,0,18.1-18.1L414.9,473.6H448a64.19,64.19,0,0,0,64-64v-256A64.19,64.19,0,0,0,448,89.6Zm38.4,320A38.44,38.44,0,0,1,448,448H64a38.44,38.44,0,0,1-38.4-38.4v-256A38.44,38.44,0,0,1,64,115.2H448a38.44,38.44,0,0,1,38.4,38.4Z"/><circle class="cls-1" cx="441.6" cy="249.6" r="19.2"/><circle class="cls-1" cx="441.6" cy="313.6" r="19.2"/><path class="cls-1" d="M364.8,140.8H83.2a32.09,32.09,0,0,0-32,32V390.4a32.09,32.09,0,0,0,32,32H364.8a32.09,32.09,0,0,0,32-32V172.8A32.09,32.09,0,0,0,364.8,140.8Zm6.4,249.6a6.49,6.49,0,0,1-6.4,6.4H83.2a6.49,6.49,0,0,1-6.4-6.4V172.8a6.49,6.49,0,0,1,6.4-6.4H364.8a6.49,6.49,0,0,1,6.4,6.4Z"/></svg> */}
                    </div>
                    <div className={styles.item}>
                        {/* <img src="./navbar/tvset.png" /> */}
                        <FontAwesomeIcon className={styles.icon} icon={faCogs} />
                        {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1</style></defs><title>old-tv-outline</title><path class="cls-1" d="M448,89.6H303.66l40.26-70.45a12.8,12.8,0,0,0-22.23-12.7L274.17,89.6H237.83L190.31,6.45a12.8,12.8,0,0,0-22.23,12.7L208.34,89.6H64a64.19,64.19,0,0,0-64,64v256a64.19,64.19,0,0,0,64,64H97.1L80.55,490.15a12.8,12.8,0,1,0,18.1,18.1L133.3,473.6H378.7l34.65,34.65a12.8,12.8,0,1,0,18.1-18.1L414.9,473.6H448a64.19,64.19,0,0,0,64-64v-256A64.19,64.19,0,0,0,448,89.6Zm38.4,320A38.44,38.44,0,0,1,448,448H64a38.44,38.44,0,0,1-38.4-38.4v-256A38.44,38.44,0,0,1,64,115.2H448a38.44,38.44,0,0,1,38.4,38.4Z"/><circle class="cls-1" cx="441.6" cy="249.6" r="19.2"/><circle class="cls-1" cx="441.6" cy="313.6" r="19.2"/><path class="cls-1" d="M364.8,140.8H83.2a32.09,32.09,0,0,0-32,32V390.4a32.09,32.09,0,0,0,32,32H364.8a32.09,32.09,0,0,0,32-32V172.8A32.09,32.09,0,0,0,364.8,140.8Zm6.4,249.6a6.49,6.49,0,0,1-6.4,6.4H83.2a6.49,6.49,0,0,1-6.4-6.4V172.8a6.49,6.49,0,0,1,6.4-6.4H364.8a6.49,6.49,0,0,1,6.4,6.4Z"/></svg> */}
                    </div>
                    <div className={styles.item}>
                        {/* <img src="./navbar/tvset.png" /> */}
                        <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                        {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1</style></defs><title>old-tv-outline</title><path class="cls-1" d="M448,89.6H303.66l40.26-70.45a12.8,12.8,0,0,0-22.23-12.7L274.17,89.6H237.83L190.31,6.45a12.8,12.8,0,0,0-22.23,12.7L208.34,89.6H64a64.19,64.19,0,0,0-64,64v256a64.19,64.19,0,0,0,64,64H97.1L80.55,490.15a12.8,12.8,0,1,0,18.1,18.1L133.3,473.6H378.7l34.65,34.65a12.8,12.8,0,1,0,18.1-18.1L414.9,473.6H448a64.19,64.19,0,0,0,64-64v-256A64.19,64.19,0,0,0,448,89.6Zm38.4,320A38.44,38.44,0,0,1,448,448H64a38.44,38.44,0,0,1-38.4-38.4v-256A38.44,38.44,0,0,1,64,115.2H448a38.44,38.44,0,0,1,38.4,38.4Z"/><circle class="cls-1" cx="441.6" cy="249.6" r="19.2"/><circle class="cls-1" cx="441.6" cy="313.6" r="19.2"/><path class="cls-1" d="M364.8,140.8H83.2a32.09,32.09,0,0,0-32,32V390.4a32.09,32.09,0,0,0,32,32H364.8a32.09,32.09,0,0,0,32-32V172.8A32.09,32.09,0,0,0,364.8,140.8Zm6.4,249.6a6.49,6.49,0,0,1-6.4,6.4H83.2a6.49,6.49,0,0,1-6.4-6.4V172.8a6.49,6.49,0,0,1,6.4-6.4H364.8a6.49,6.49,0,0,1,6.4,6.4Z"/></svg> */}
                    </div>
                    <div className={styles.item}>
                        {/* <img src="./navbar/tvset.png" /> */}
                        <FontAwesomeIcon className={styles.icon} icon={faUser} />
                        {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1</style></defs><title>old-tv-outline</title><path class="cls-1" d="M448,89.6H303.66l40.26-70.45a12.8,12.8,0,0,0-22.23-12.7L274.17,89.6H237.83L190.31,6.45a12.8,12.8,0,0,0-22.23,12.7L208.34,89.6H64a64.19,64.19,0,0,0-64,64v256a64.19,64.19,0,0,0,64,64H97.1L80.55,490.15a12.8,12.8,0,1,0,18.1,18.1L133.3,473.6H378.7l34.65,34.65a12.8,12.8,0,1,0,18.1-18.1L414.9,473.6H448a64.19,64.19,0,0,0,64-64v-256A64.19,64.19,0,0,0,448,89.6Zm38.4,320A38.44,38.44,0,0,1,448,448H64a38.44,38.44,0,0,1-38.4-38.4v-256A38.44,38.44,0,0,1,64,115.2H448a38.44,38.44,0,0,1,38.4,38.4Z"/><circle class="cls-1" cx="441.6" cy="249.6" r="19.2"/><circle class="cls-1" cx="441.6" cy="313.6" r="19.2"/><path class="cls-1" d="M364.8,140.8H83.2a32.09,32.09,0,0,0-32,32V390.4a32.09,32.09,0,0,0,32,32H364.8a32.09,32.09,0,0,0,32-32V172.8A32.09,32.09,0,0,0,364.8,140.8Zm6.4,249.6a6.49,6.49,0,0,1-6.4,6.4H83.2a6.49,6.49,0,0,1-6.4-6.4V172.8a6.49,6.49,0,0,1,6.4-6.4H364.8a6.49,6.49,0,0,1,6.4,6.4Z"/></svg> */}
                    </div>
                    <div className={styles.item}>
                        {/* <img src="./navbar/tvset.png" /> */}
                        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
                        {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1</style></defs><title>old-tv-outline</title><path class="cls-1" d="M448,89.6H303.66l40.26-70.45a12.8,12.8,0,0,0-22.23-12.7L274.17,89.6H237.83L190.31,6.45a12.8,12.8,0,0,0-22.23,12.7L208.34,89.6H64a64.19,64.19,0,0,0-64,64v256a64.19,64.19,0,0,0,64,64H97.1L80.55,490.15a12.8,12.8,0,1,0,18.1,18.1L133.3,473.6H378.7l34.65,34.65a12.8,12.8,0,1,0,18.1-18.1L414.9,473.6H448a64.19,64.19,0,0,0,64-64v-256A64.19,64.19,0,0,0,448,89.6Zm38.4,320A38.44,38.44,0,0,1,448,448H64a38.44,38.44,0,0,1-38.4-38.4v-256A38.44,38.44,0,0,1,64,115.2H448a38.44,38.44,0,0,1,38.4,38.4Z"/><circle class="cls-1" cx="441.6" cy="249.6" r="19.2"/><circle class="cls-1" cx="441.6" cy="313.6" r="19.2"/><path class="cls-1" d="M364.8,140.8H83.2a32.09,32.09,0,0,0-32,32V390.4a32.09,32.09,0,0,0,32,32H364.8a32.09,32.09,0,0,0,32-32V172.8A32.09,32.09,0,0,0,364.8,140.8Zm6.4,249.6a6.49,6.49,0,0,1-6.4,6.4H83.2a6.49,6.49,0,0,1-6.4-6.4V172.8a6.49,6.49,0,0,1,6.4-6.4H364.8a6.49,6.49,0,0,1,6.4,6.4Z"/></svg> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
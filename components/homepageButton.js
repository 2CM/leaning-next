import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "../styles/utils.module.css";

export default function HomepageButton() {
    return <div className={styles.homepageButtonHolder}>
        <Link href="/">
            <div icon={faAngleLeft} className={styles.homepageButton}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>
        </Link>
    </div>
}
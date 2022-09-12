import styles from "../styles/global.css"
import "../styles/transition.css";
import Transition from "../components/transition"

export default function App({ Component, pageProps}) {
    return (
        <Transition>
            <Component {...pageProps}/>
        </Transition>
    )
}
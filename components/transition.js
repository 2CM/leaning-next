import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'


const variants = {
    out: {
        opacity: [1,0],
        transform: ["scale(100%)","scale(50%)"],
        filter: ["blur(0px)","blur(100px)"],
        transition: {
            duration: 0.4,
            easing: "ease-in"
        }
    },
    in: {
        opacity: [0,1],
        transform: ["scale(150%)", "scale(100%)"],
        filter: ["blur(100px)","blur(0px)"], 
        transition: {
            duration: 0.4,
            delay: 0.4,
            easing: "ease-out",
        }
    }
}

export default function Transition({children}) {
    const { asPath } = useRouter();

    return (
        <div className="effect">
            <AnimatePresence initial={false}>
                <motion.div key={asPath} variants={variants} animate="in" initial="out" exit="out">
                    {children}
                </motion.div>
                {/* <Image className={utilStyles.voronoiImage} layout="fill" src="/images/voronoi.svg"/> */}
            </AnimatePresence>
        </div>
    )
}
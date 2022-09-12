import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
    out: {
        opacity: 0,
        transform: "scale(150%)",
        transition: {
            duration: 0.75,
            easing: "linear"
        }
    },
    in: {
        opacity: 1,
        transform: ["scale(0%)", "scale(100%)"],
        transition: {
            duration: 0.75,
            easing: "linear",
        }
    }
}

export default function Transition({children}) {
    const { asPath } = useRouter();

    return (
        <div className="effect">
            <AnimatePresence initial={false} exitBeforeEnter>
                <motion.div key={asPath} variants={variants} animate="in" initial="out" exit="out">
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
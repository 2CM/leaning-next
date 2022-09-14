import { Router, useRouter } from "next/router";
import React, { useRef, useState } from "react";
import NextLink from "next/link"
import Image from "next/image";
import utilStyles from "../styles/utils.module.css"



// was trying to do a thing with custom links, didnt work :(


export default function Link({children, href}) {
    const router = useRouter();
    var [clicked, setClicked] = useState(0);
    var cover = useRef(null);

    const handleClick = (e) => {
        e.preventDefault()

        router.push(href)

        /*

        setClicked(true)

        setTimeout(function() {
            cover.current.style.background = "black";
        }, 475)

        setTimeout(() => {
            setClicked(false)
            router.push(href)
        }, 1500);
        */
    }

    return (
        <a href={href} onClick={handleClick}>{clicked ? <div ref={cover} className={utilStyles.voronoiImage}><Image onLoad={console.log("e")} src="/images/voronoiReverse.svg" layout="fill" objectFit="cover"/></div> : null}{children}</a>
    )
}
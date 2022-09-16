import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import utilStyles from "../styles/utils.module.css"
import HomepageButton from "../components/homepageButton";

export default function ParallaxTesting() {
    const ref = useRef();
    return (
        <div className="page" style={{overflow: "scroll", overflowX: "hidden", height: "100vh"}}>
            <HomepageButton/>
            <Parallax pages={2} style={{ top: '0', left: '0', height: "100vh"}}>
                <ParallaxLayer 
                    offset={0} 
                    speed={0} 
                    className={utilStyles.middle} 
                    //style={{background: "radial-gradient(grey 0%, white 20%, black 20%, black 100%)"}}
                >
                    <svg>
                        <circle cx="20%" cy="50%" r="40" fill="red"></circle>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={0} 
                    speed={1} 
                    className={utilStyles.middle} 
                    //style={{background: "radial-gradient(grey 0%, white 20%, black 20%, black 100%)"}}
                >
                    <svg>
                        <circle cx="50%" cy="50%" r="40" fill="green"></circle>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={0} 
                    speed={2} 
                    className={utilStyles.middle} 
                    //style={{background: "radial-gradient(grey 0%, white 20%, black 20%, black 100%)"}}
                >
                    <svg>
                        <circle cx="80%" cy="50%" r="40" fill="blue"></circle>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={0} 
                    speed={1} 
                    className={utilStyles.middle}
                >
                    <p style={{textShadow: "0 0 4px black"}}>cool website thing here</p>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
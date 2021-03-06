import { useEffect } from "react";
import style from '../styles/Intro.module.css'
import Typist from 'react-typist'

export default function intro() {

    return (
        <div className={style.intro}>
            <div className={style.picContainer}>

            <Typist className = {style.test}>
            <div className={style.test3}>
                <h1 className={style.name}>Hi I'm Eric Young</h1>
                <h3 className={style.description}>Software Engineer</h3>
                {/* <h3 className={style.description}>Portfolio under Construction :)</h3> */}
            </div>
            </Typist>

                <div className={style.bottom}>
                    <img src="downArrow.svg" className={style.tester}></img>
                    <h1 className={style.who}>Who am I</h1>
                </div>

            </div>

        </div>
    )
}
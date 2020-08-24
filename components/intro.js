import { useEffect } from "react";
import style from '../styles/Intro.module.css'

export default function intro() {

    return (
        <div className={style.intro}>
            <div className={style.picContainer}>
                <h1 className={style.name}>Hi I'm Eric Young</h1>
                <div className={style.name}>
                    <img src="downArrow.svg" className={style.name}></img>
                    <h1 className={style.who}>Who am I</h1>
                </div>

            </div>

        </div>
    )
}
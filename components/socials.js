import { useEffect, useState } from "react";
import style from '../styles/socials.module.css'
import Typist from 'react-typist'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function socials() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <div className={style.socialsContainer}>
            <a href="https://www.linkedin.com/in/eric-young-se/"><img src="linkedin.svg" className={style.socialImgs}></img></a>
            <a href="https://github.com/Eryoung-610"><img src="github.svg" className={style.socialImgs}></img></a>
            <img src="resume.png" className={style.socialImgs} onClick={() => setLgShow(true)}></img>



            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
          </Modal.Title>
                </Modal.Header>
                <Modal.Body><iframe src="https://drive.google.com/file/d/1atKQzK9gtoksX9p-6qoUUQ5VSOhm_lkc/preview?usp=sharing" className={style.resumeWindow}></iframe></Modal.Body>
            </Modal>
        </div>
    )
}

import style from '../styles/aboutMe.module.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const aboutMe = () => {
    return (
        <div className={style.aboutMeContainer}>
            <Container>
                <Row>
                    <Col xs={12} md={2} lg={3} className={style.picContainer}>
                        <Image src="circlePic.png" className={style.circlePic} />
                    </Col>
                    <Col xs={12} md={8} lg={9} className={style.test}>
                        <h1 className={style.iAm}>I am ...</h1>
                        <p className={style.description}>
                            a 21 year old software engineer attending The University of California, Davis studying computer science. I graduated from General Assembly's Software Engineering Immersive bootcamp in August of 2020 where I learned to create full stack applications by means of MERN or PERN stack. Stepping away from programming, I enjoy playing video games, paddling, and playing basketball.
                </p>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default aboutMe;
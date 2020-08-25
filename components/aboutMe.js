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
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default aboutMe;
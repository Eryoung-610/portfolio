import { useEffect } from "react";
import style from '../styles/projects.module.css'
import Typist from 'react-typist'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Socials from '../components/socials'

export default function projects() {

    return (
        <div className={style.projectContainer}>
            <Container>
                <div>
                    <a href="https://eryoung-610.github.io/Calm-The-Bomb/"><h1 className={style.projectName}>Calm the Bomb</h1></a>
                    <p className={style.projectDescription}>HTML/CSS/JavaScript game where a player must keep clicking on bombs to defuse them or else the game is lost. Utilizes Bootstrap for the design and format of the game.</p>
                </div>

                <Carousel>
                    <Carousel.Item className={style.projectPics}>
                        <img
                            className={style.carouselPic}
                            src="Project1Pic1.JPG"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3 className={style.text}>Starting Screen</h3>
                            <p className={style.text}>Player is able to choose their difficulty and start the game</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item className={style.projectPics}>
                        <img
                            className={style.carouselPic}
                            src="Project1Pic2.JPG"
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            <h3 className={style.text}>Play Phase</h3>
                            <p className={style.text}>Bombs will light up and explode unless clicked.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item className={style.projectPics}>
                        <img
                            className={style.carouselPic}
                            src="Project1Pic3.JPG"
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                            <h3 className={style.text}>Game Over Phase</h3>
                            <p className={style.text}>Explosion sound will play and the game ends.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>

                <div>
                    <a href="https://nba-db-project.herokuapp.com/"><h1 className={style.projectName}>NBA Database 2020</h1></a>
                    <p className={style.projectDescription}>Full stack application themed around the NBA built with a PSQL backend and ejs. Styled with materialize and includes user authentication. Users are also able to create their own team and players.</p>
                </div>

                <Carousel>
                    <Carousel.Item className={style.projectPics}>
                        <img
                            className={style.carouselPic}
                            src="Project2Pic1.JPG"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3 className={style.text}>Teams</h3>
                            <p className={style.text}>A user can select a team to view</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item className={style.projectPics}>
                        <img
                            className={style.carouselPic}
                            src="Project2Pic2.JPG"
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                            <h3 className={style.text}>Team Rosters</h3>
                            <p className={style.text}>A User can view a team roster filtered out by positions.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item className={style.projectPics}>
                        <img
                            className={style.carouselPic}
                            src="Project2Pic3.JPG"
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                            <h3 className={style.text}>Third slide label</h3>
                            <p className={style.text}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>

                <div>
                    <a href="https://condescending-spence-15bcf7.netlify.app/"><h1 className={style.projectName}>World of Wonder</h1></a>
                    <p className={style.projectDescription}>Built with the MERN stack, World of Wonder is an interactive, online application dedicated to bringing a musuem to you. With text to speech features, and an ability to take notes on artifacts as you wander throughout the rooms, curate their own exhibit by saving artifacts, and the application is user friendly for all ages!</p>
                </div>

                <Carousel>
                    <Carousel.Item className={style.projectPics}>
                        <img
                            className={style.carouselPic}
                            src="Project3Pic1.JPG"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3 className={style.text}>First slide label</h3>
                            <p className={style.text}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item className={style.projectPics}>
                        <img
                            className={style.carouselPic}
                            src="Project3Pic2.JPG"
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                            <h3 className={style.text}>Second slide label</h3>
                            <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item className={style.projectPics}>
                        <img
                            className={style.carouselPic}
                            src="Project3Pic3.JPG"
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                            <h3 className={style.text}>Third slide label</h3>
                            <p className={style.text}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}
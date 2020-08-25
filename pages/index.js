import Head from 'next/head'
import Intro from '../components/intro'
import AboutMe from '../components/aboutMe'
import Work from '../components/work'
import Projects from '../components/projects'
import Socials from '../components/socials'
import styles from '../styles/Home.module.css'
import Particle from '../components/particles'

export default function Home() {
  return (
    <div>
      {/* <Particle /> */}
      <Socials />
      <Intro />
      <AboutMe />
      <Work />
      <Projects />
      
    </div>
  )
}

import Head from 'next/head'
import Intro from '../components/intro'
import AboutMe from '../components/aboutMe'
import Work from '../components/work'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Work />
    </div>
  )
}

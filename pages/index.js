import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Jordy Leysen | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building exceptional digital experiences." />
        <link rel="icon" href="/fav.jpeg" />
        <link rel="alternate" hrefLang="nl" href="https://www.leytech.be/nl"/>
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}

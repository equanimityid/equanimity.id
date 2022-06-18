import React, { useEffect } from "react"
import { Parallax } from "@react-spring/parallax"
import { useColorMode } from "theme-ui"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => {
  const [colorMode, setColorMode] = useColorMode()

  useEffect(() => {
    const hours = new Date().getHours()
    const isDayTime = hours > 6 && hours < 20
    
    if (isDayTime && colorMode === 'dark')
      setColorMode('light')
    else
      setColorMode('dark')
  }, [])

  return (
    <Layout>
      <Parallax pages={5}>
        <Hero offset={0} factor={1} />
        <Projects offset={1} factor={2} />
        <About offset={3} factor={1} />
        <Contact offset={4} factor={1} />
      </Parallax>
    </Layout>
  )
}

export default Cara

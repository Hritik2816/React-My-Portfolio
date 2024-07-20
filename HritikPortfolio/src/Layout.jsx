import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn/ThemeBtn'

function Layout() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Acyual change in a theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Header>
        <ThemeBtn />
      </Header>
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
import React, { useState, useEffect } from 'react'

import '../styles/style.css'
import '../styles/new-moon.css'
import '../styles/light-theme.css'

function setDarkTheme(setTheme) {
  localStorage.setItem('theme', 'dark')
  setTheme('dark')
  document.body.style.backgroundColor = '#272727'
}

function setLightTheme(setTheme) {
  localStorage.setItem('theme', 'light')
  setTheme('light')
  document.body.style.backgroundColor = 'white'
}

function toggleTheme(theme, setTheme) {
  theme === 'dark' ? setDarkTheme(setTheme) : setLightTheme(setTheme)
}

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    toggleTheme(theme, setTheme)
  }, [theme])

  useEffect(() => {
    const primaryColor = localStorage.getItem('primary')
    const savedTheme = localStorage.getItem('theme')

    if (primaryColor) {
      document.documentElement.style.setProperty('--primary', primaryColor)
    }

    if (savedTheme) {
      toggleTheme(savedTheme, setTheme)
    }
  }, [])

  return (
    <>
      <div className={`theme ${theme}`}>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
